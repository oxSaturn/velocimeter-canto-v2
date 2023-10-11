export default [
  {
    type: "constructor",
    inputs: [
      { type: "address", name: "_stake", internalType: "address" },
      { type: "address", name: "_internal_bribe", internalType: "address" },
      { type: "address", name: "_external_bribe", internalType: "address" },
      { type: "address", name: "__ve", internalType: "address" },
      { type: "address", name: "_voter", internalType: "address" },
      { type: "bool", name: "_forPair", internalType: "bool" },
      {
        type: "address[]",
        name: "_allowedRewardTokens",
        internalType: "address[]",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "_ve",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "balanceOf",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "batchRewardPerToken",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "maxRuns", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "batchUpdateRewardPerToken",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "maxRuns", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "timestamp", internalType: "uint256" },
      { type: "uint256", name: "balanceOf", internalType: "uint256" },
    ],
    name: "checkpoints",
    inputs: [
      { type: "address", name: "", internalType: "address" },
      { type: "uint256", name: "", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256", name: "claimed0", internalType: "uint256" },
      { type: "uint256", name: "claimed1", internalType: "uint256" },
    ],
    name: "claimFees",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "deposit",
    inputs: [
      { type: "uint256", name: "amount", internalType: "uint256" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "depositAll",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "derivedBalance",
    inputs: [{ type: "address", name: "account", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "derivedBalances",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "derivedSupply",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "earned",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "address", name: "account", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "external_bribe",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "fees0",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "fees1",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getPriorBalanceIndex",
    inputs: [
      { type: "address", name: "account", internalType: "address" },
      { type: "uint256", name: "timestamp", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "", internalType: "uint256" },
      { type: "uint256", name: "", internalType: "uint256" },
    ],
    name: "getPriorRewardPerToken",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "timestamp", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getPriorSupplyIndex",
    inputs: [{ type: "uint256", name: "timestamp", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "getReward",
    inputs: [
      { type: "address", name: "account", internalType: "address" },
      { type: "address[]", name: "tokens", internalType: "address[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "internal_bribe",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isForPair",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isReward",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "lastEarn",
    inputs: [
      { type: "address", name: "", internalType: "address" },
      { type: "address", name: "", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "lastTimeRewardApplicable",
    inputs: [{ type: "address", name: "token", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "lastUpdateTime",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "left",
    inputs: [{ type: "address", name: "token", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "notifyRewardAmount",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "amount", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "numCheckpoints",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "periodFinish",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "rewardPerToken",
    inputs: [{ type: "address", name: "token", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "timestamp", internalType: "uint256" },
      { type: "uint256", name: "rewardPerToken", internalType: "uint256" },
    ],
    name: "rewardPerTokenCheckpoints",
    inputs: [
      { type: "address", name: "", internalType: "address" },
      { type: "uint256", name: "", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "rewardPerTokenNumCheckpoints",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "rewardPerTokenStored",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "rewardRate",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "rewards",
    inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "rewardsListLength",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "stake",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "timestamp", internalType: "uint256" },
      { type: "uint256", name: "supply", internalType: "uint256" },
    ],
    name: "supplyCheckpoints",
    inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "supplyNumCheckpoints",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "swapOutRewardToken",
    inputs: [
      { type: "uint256", name: "i", internalType: "uint256" },
      { type: "address", name: "oldToken", internalType: "address" },
      { type: "address", name: "newToken", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "tokenIds",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalSupply",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "userRewardPerTokenStored",
    inputs: [
      { type: "address", name: "", internalType: "address" },
      { type: "address", name: "", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "voter",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "withdraw",
    inputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "withdrawAll",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "withdrawToken",
    inputs: [
      { type: "uint256", name: "amount", internalType: "uint256" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "event",
    name: "ClaimFees",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "uint256", name: "claimed0", indexed: false },
      { type: "uint256", name: "claimed1", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ClaimRewards",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "address", name: "reward", indexed: true },
      { type: "uint256", name: "amount", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Deposit",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "uint256", name: "tokenId", indexed: false },
      { type: "uint256", name: "amount", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NotifyReward",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "address", name: "reward", indexed: true },
      { type: "uint256", name: "amount", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdraw",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "uint256", name: "tokenId", indexed: false },
      { type: "uint256", name: "amount", indexed: false },
    ],
    anonymous: false,
  },
] as const;
