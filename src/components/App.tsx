import { createPublicClient, formatUnits, http } from "viem";
import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useDisconnect,
  useNetwork,
  usePrepareContractWrite,
  useSwitchNetwork,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { canto } from "viem/chains";

import pairs from "../pairs.json";

import gaugeAbi from "../abis/gauge";
import pairAbi from "../abis/pair";

import { WagmiConfig, createConfig } from "wagmi";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: canto,
    transport: http("https://mainnode.plexnode.org:8545"),
  }),
});
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
                    <BalanceOfPair pair={pair.pair} />
                  </td>
                  <td>
                    <a
                      href={`https://tuber.build/address/${pair.gauge}`}
                      target="_blank"
                    >
                      {pair.gauge}
                    </a>
                    <BalanceOfGauge gauge={pair.gauge} />
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
    abi: gaugeAbi,
    functionName: "balanceOf",
    args: [address],
    enabled: isConnected,
  });
  if (!isConnected) return null;
  if (isLoading) return <div>loading</div>;
  if (data)
    return (
      <div>
        balance in gauge: {formatUnits(data, 18)}
        <WithdrawFromGauge gauge={gaugeAddress} amount={data as bigint} />
      </div>
    );
}

function BalanceOfPair({ pair: pairAddress }: { pair: `0x${string}` }) {
  const { address, isConnected } = useAccount();
  const { data, isLoading } = useContractRead({
    address: pairAddress,
    abi: pairAbi,
    functionName: "balanceOf",
    args: [address],
    enabled: isConnected,
  });
  if (!isConnected) return null;
  if (isLoading) return <div>loading</div>;
  if (data) return <div>balance in pair: {formatUnits(data, 18)}</div>;
}

function WithdrawFromGauge({
  gauge: gaugeAddress,
  amount,
}: {
  gauge: `0x${string}`;
  amount: bigint;
}) {
  const { address, isConnected } = useAccount();
  const { config } = usePrepareContractWrite({
    address: gaugeAddress,
    abi: gaugeAbi,
    functionName: "withdrawAll",
    enabled: isConnected,
  });

  const { write } = useContractWrite(config);

  return <button onClick={() => write?.()}>Withdraw</button>;
}
