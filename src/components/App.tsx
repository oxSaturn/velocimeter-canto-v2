import { createPublicClient, formatUnits, http } from "viem";
import {
  erc20ABI,
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useDisconnect,
  useNetwork,
  usePrepareContractWrite,
  useSwitchNetwork,
  useWaitForTransaction,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { canto } from "viem/chains";

import pairs from "../pairs.json";

import { abi as gaugeAbi } from "../abis/gauge";
import { abi as pairAbi } from "../abis/pair";
import { abi as routerAbi } from "../abis/router";

import { WagmiConfig, createConfig } from "wagmi";
const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: canto,
    transport: http("https://mainnode.plexnode.org:8545"),
  }),
});

const router = "0x8e2e2f70B4bD86F82539187A634FB832398cc771";
export default function App() {
  return (
    <WagmiConfig config={config}>
      <main>
        <Connect />
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Pair Address</th>
              <th>Gauge</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((pair) => {
              return (
                <tr key={pair.pair}>
                  <td>{pair.symbol}</td>
                  <td>
                    {pair.pair}
                    <BalanceOfPair pair={pair.pair as `0x${string}`} />
                  </td>
                  <td>
                    <a
                      href={`https://tuber.build/address/${pair.gauge}`}
                      target="_blank"
                    >
                      {pair.gauge}
                    </a>
                    <BalanceOfGauge gauge={pair.gauge as `0x${string}`} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </WagmiConfig>
  );
}
function Connect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  if (isConnected && chain?.id !== canto.id)
    return (
      <div>
        Unsupported chain{" "}
        <button onClick={() => switchNetwork?.(canto.id)}>
          Switch To Canto
        </button>
      </div>
    );

  if (isConnected)
    return (
      <div>
        Connected to {address} on Canto
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  return <button onClick={() => connect()}>Connect Wallet</button>;
}

function BalanceOfGauge({ gauge: gaugeAddress }: { gauge: `0x${string}` }) {
  const { address, isConnected } = useAccount();
  const { data, isLoading } = useContractRead({
    address: gaugeAddress,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [address!],
    enabled:
      address !== undefined &&
      gaugeAddress !== "0x0000000000000000000000000000000000000000",
  });
  if (!isConnected) return null;
  if (isLoading) return <div>loading</div>;
  if (data)
    return (
      <div>
        balance in gauge: {formatUnits(data, 18)}
        <WithdrawFromGauge gauge={gaugeAddress} />
      </div>
    );
}

function WithdrawFromGauge({ gauge: gaugeAddress }: { gauge: `0x${string}` }) {
  const { address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: gaugeAddress,
    abi: gaugeAbi,
    functionName: "withdrawAll",
    enabled: address !== undefined,
  });

  const { write } = useContractWrite(config);

  return <button onClick={() => write?.()}>Withdraw</button>;
}

function BalanceOfPair({ pair: pairAddress }: { pair: `0x${string}` }) {
  const { address, isConnected } = useAccount();
  const { data, isLoading } = useContractRead({
    address: pairAddress,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [address!],
    enabled: address !== undefined,
    watch: true,
  });
  if (!isConnected) return null;
  if (isLoading) return <div>loading</div>;
  if (data)
    return (
      <div>
        balance in pair: {formatUnits(data, 18)}
        <WithdrawFromPair pair={pairAddress} amount={data} />
      </div>
    );
}

function WithdrawFromPair({
  pair: pairAddress,
  amount,
}: {
  pair: `0x${string}`;
  amount: bigint;
}) {
  const { address } = useAccount();

  const { data: token0 } = useContractRead({
    address: pairAddress,
    abi: pairAbi,
    functionName: "token0",
    staleTime: Infinity,
  });

  const { data: token1 } = useContractRead({
    address: pairAddress,
    abi: pairAbi,
    functionName: "token1",
    staleTime: Infinity,
  });

  const { data: stable } = useContractRead({
    address: pairAddress,
    abi: pairAbi,
    functionName: "stable",
    staleTime: Infinity,
  });

  const {
    data: allowance,
    refetch,
    isLoading,
  } = useContractRead({
    address: pairAddress,
    abi: erc20ABI,
    functionName: "allowance",
    args: [address!, router],
    enabled: address !== undefined && !!router,
  });

  const isApproveNeeded = allowance !== undefined && allowance < amount;

  const { config: approveConfig } = usePrepareContractWrite({
    address: pairAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [router, amount],
    enabled: address !== undefined && isApproveNeeded,
  });

  const { write: approveWrite, data: approveTx } =
    useContractWrite(approveConfig);

  const { data: transaction } = useWaitForTransaction({
    hash: approveTx?.hash,
    onSuccess: () => {
      refetch?.();
    },
    enabled: approveTx !== undefined,
  });

  const { data, isLoading: quoting } = useContractRead({
    address: router,
    abi: routerAbi,
    functionName: "quoteRemoveLiquidity",
    args: [token0!, token1!, stable!, amount],
    enabled:
      address !== undefined &&
      token0 !== undefined &&
      token1 !== undefined &&
      stable !== undefined,
  });

  const { config, error } = usePrepareContractWrite({
    address: router,
    abi: routerAbi,
    functionName: "removeLiquidity",
    args: [
      token0!,
      token1!,
      stable!,
      amount,
      data !== undefined ? data?.[0] * 95n / 100n : 1n,
      data !== undefined ? data?.[1] * 95n / 100n : 1n,
      address!,
      BigInt(Date.now()) / 1000n + 600n,
    ],
    chainId: canto.id,
    enabled:
      token0 !== undefined &&
      token1 !== undefined &&
      stable !== undefined &&
      amount > 0n &&
      data !== undefined &&
      address !== undefined,
  });

  console.log(config, error);

  const { write } = useContractWrite(config);

  return (
    <>
      <button
        onClick={() => {
          if (isApproveNeeded) {
            approveWrite?.();
          } else {
            write?.();
          }
        }}
        disabled={
          !isApproveNeeded &&
          (quoting ||
            config.request === undefined ||
            isLoading ||
            error !== null ||
            write === undefined)
        }
      >
        {isApproveNeeded ? "Approve to Withdraw" : "Withdraw All"}
      </button>
    </>
  );
}
