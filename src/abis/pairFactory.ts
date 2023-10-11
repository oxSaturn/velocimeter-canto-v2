export default [
    {
        "type": "constructor",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "MAX_FEE",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "acceptFeeManager",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "acceptPauser",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "acceptTank",
        "inputs": [
            {
                "type": "address",
                "name": "_tank",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "allPairs",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "allPairsLength",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [
            {
                "type": "address",
                "name": "pair",
                "internalType": "address"
            }
        ],
        "name": "createPair",
        "inputs": [
            {
                "type": "address",
                "name": "tokenA",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "tokenB",
                "internalType": "address"
            },
            {
                "type": "bool",
                "name": "stable",
                "internalType": "bool"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "deployer",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "feeManager",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "getFee",
        "inputs": [
            {
                "type": "bool",
                "name": "_stable",
                "internalType": "bool"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            },
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "getInitializable",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "getPair",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            },
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "getVoter",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isPair",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isPaused",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "pure",
        "outputs": [
            {
                "type": "bytes32",
                "name": "",
                "internalType": "bytes32"
            }
        ],
        "name": "pairCodeHash",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "pauser",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "pendingFeeManager",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "pendingPauser",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setFee",
        "inputs": [
            {
                "type": "bool",
                "name": "_stable",
                "internalType": "bool"
            },
            {
                "type": "uint256",
                "name": "_fee",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setFeeManager",
        "inputs": [
            {
                "type": "address",
                "name": "_feeManager",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setPause",
        "inputs": [
            {
                "type": "bool",
                "name": "_state",
                "internalType": "bool"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setPauser",
        "inputs": [
            {
                "type": "address",
                "name": "_pauser",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setTank",
        "inputs": [
            {
                "type": "address",
                "name": "_tank",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setTeam",
        "inputs": [
            {
                "type": "address",
                "name": "_team",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setVoter",
        "inputs": [
            {
                "type": "address",
                "name": "_voter",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "stableFee",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "tank",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "team",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "volatileFee",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "voter",
        "inputs": []
    },
    {
        "type": "event",
        "name": "PairCreated",
        "inputs": [
            {
                "type": "address",
                "name": "token0",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token1",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "stable",
                "indexed": false
            },
            {
                "type": "address",
                "name": "pair",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "",
                "indexed": false
            }
        ],
        "anonymous": false
    }
] as const;