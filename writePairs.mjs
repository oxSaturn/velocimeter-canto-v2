import { createPublicClient, http } from "viem";
import { canto } from "viem/chains";
import { erc20ABI } from "wagmi";
import fs from 'node:fs'
export const publicClient = createPublicClient({
  chain: canto,
  transport: http("https://mainnode.plexnode.org:8545"),
});

const pairFactory = "0xF80909DF0A01ff18e4D37BF682E40519B21Def46";

const abi = [
  {
    type: "constructor",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "MAX_FEE",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "acceptFeeManager",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "acceptPauser",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "acceptTank",
    inputs: [
      {
        type: "address",
        name: "_tank",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "allPairs",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "allPairsLength",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "address",
        name: "pair",
        internalType: "address",
      },
    ],
    name: "createPair",
    inputs: [
      {
        type: "address",
        name: "tokenA",
        internalType: "address",
      },
      {
        type: "address",
        name: "tokenB",
        internalType: "address",
      },
      {
        type: "bool",
        name: "stable",
        internalType: "bool",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "deployer",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "feeManager",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "getFee",
    inputs: [
      {
        type: "bool",
        name: "_stable",
        internalType: "bool",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "getInitializable",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "getPair",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "getVoter",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "isPair",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "isPaused",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    name: "pairCodeHash",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "pauser",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "pendingFeeManager",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "pendingPauser",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setFee",
    inputs: [
      {
        type: "bool",
        name: "_stable",
        internalType: "bool",
      },
      {
        type: "uint256",
        name: "_fee",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setFeeManager",
    inputs: [
      {
        type: "address",
        name: "_feeManager",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setPause",
    inputs: [
      {
        type: "bool",
        name: "_state",
        internalType: "bool",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setPauser",
    inputs: [
      {
        type: "address",
        name: "_pauser",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setTank",
    inputs: [
      {
        type: "address",
        name: "_tank",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setTeam",
    inputs: [
      {
        type: "address",
        name: "_team",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setVoter",
    inputs: [
      {
        type: "address",
        name: "_voter",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "stableFee",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "tank",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "team",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "volatileFee",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "voter",
    inputs: [],
  },
  {
    type: "event",
    name: "PairCreated",
    inputs: [
      {
        type: "address",
        name: "token0",
        indexed: true,
      },
      {
        type: "address",
        name: "token1",
        indexed: true,
      },
      {
        type: "bool",
        name: "stable",
        indexed: false,
      },
      {
        type: "address",
        name: "pair",
        indexed: false,
      },
      {
        type: "uint256",
        name: "",
        indexed: false,
      },
    ],
    anonymous: false,
  },
];
// get all pairs
async function main() {
  // get all pairs
  const length = await publicClient.readContract({
    address: pairFactory,
    abi,
    functionName: "allPairsLength",
  });
  const pairs = await publicClient.multicall({
    allowFailure: false,
    contracts: [...Array(Number(length)).keys()].map((i) => ({
      address: pairFactory,
      abi,
      functionName: "allPairs",
      args: [i],
    })),
  });
  const symbols = await publicClient.multicall({
    allowFailure: false,
    contracts: [...Array(Number(length)).keys()].map((i) => ({
      address: pairs[i],
      abi: erc20ABI,
      functionName: "symbol",
    })),
  });
  const gauges = await publicClient.multicall({
    allowFailure: false,
    contracts: [...Array(Number(length)).keys()].map((i) => ({
      address: "0x8e3525Dbc8356c08d2d55F3ACb6416b5979D3389",
      abi: [
        {
          type: "function",
          stateMutability: "view",
          outputs: [
            {
              type: "address",
              name: "",
              internalType: "address",
            },
          ],
          name: "gauges",
          inputs: [
            {
              type: "address",
              name: "",
              internalType: "address",
            },
          ],
        },
      ],
      functionName: "gauges",
      args: [pairs[i]],
    })),
  });

  const ps = symbols.map((symbol, index) => ({
    symbol,
    pair: pairs[index],
    gauge: gauges[index],
  }));
  fs.writeFileSync("pairs.json", JSON.stringify(ps, null, 2));
}

main();
