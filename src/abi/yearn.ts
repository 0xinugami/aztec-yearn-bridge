export const YEARN_ABI = [
  {
    name: 'Transfer',
    inputs: [
      { name: 'sender', type: 'address', indexed: true },
      { name: 'receiver', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'Approval',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'StrategyAdded',
    inputs: [
      { name: 'strategy', type: 'address', indexed: true },
      { name: 'debtRatio', type: 'uint256', indexed: false },
      { name: 'minDebtPerHarvest', type: 'uint256', indexed: false },
      { name: 'maxDebtPerHarvest', type: 'uint256', indexed: false },
      { name: 'performanceFee', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'StrategyReported',
    inputs: [
      { name: 'strategy', type: 'address', indexed: true },
      { name: 'gain', type: 'uint256', indexed: false },
      { name: 'loss', type: 'uint256', indexed: false },
      { name: 'debtPaid', type: 'uint256', indexed: false },
      { name: 'totalGain', type: 'uint256', indexed: false },
      { name: 'totalLoss', type: 'uint256', indexed: false },
      { name: 'totalDebt', type: 'uint256', indexed: false },
      { name: 'debtAdded', type: 'uint256', indexed: false },
      { name: 'debtRatio', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  { name: 'UpdateGovernance', inputs: [{ name: 'governance', type: 'address', indexed: false }], anonymous: false, type: 'event' },
  { name: 'UpdateManagement', inputs: [{ name: 'management', type: 'address', indexed: false }], anonymous: false, type: 'event' },
  { name: 'UpdateRewards', inputs: [{ name: 'rewards', type: 'address', indexed: false }], anonymous: false, type: 'event' },
  { name: 'UpdateDepositLimit', inputs: [{ name: 'depositLimit', type: 'uint256', indexed: false }], anonymous: false, type: 'event' },
  { name: 'UpdatePerformanceFee', inputs: [{ name: 'performanceFee', type: 'uint256', indexed: false }], anonymous: false, type: 'event' },
  { name: 'UpdateManagementFee', inputs: [{ name: 'managementFee', type: 'uint256', indexed: false }], anonymous: false, type: 'event' },
  { name: 'UpdateGuardian', inputs: [{ name: 'guardian', type: 'address', indexed: false }], anonymous: false, type: 'event' },
  { name: 'EmergencyShutdown', inputs: [{ name: 'active', type: 'bool', indexed: false }], anonymous: false, type: 'event' },
  { name: 'UpdateWithdrawalQueue', inputs: [{ name: 'queue', type: 'address[20]', indexed: false }], anonymous: false, type: 'event' },
  {
    name: 'StrategyUpdateDebtRatio',
    inputs: [
      { name: 'strategy', type: 'address', indexed: true },
      { name: 'debtRatio', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'StrategyUpdateMinDebtPerHarvest',
    inputs: [
      { name: 'strategy', type: 'address', indexed: true },
      { name: 'minDebtPerHarvest', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'StrategyUpdateMaxDebtPerHarvest',
    inputs: [
      { name: 'strategy', type: 'address', indexed: true },
      { name: 'maxDebtPerHarvest', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'StrategyUpdatePerformanceFee',
    inputs: [
      { name: 'strategy', type: 'address', indexed: true },
      { name: 'performanceFee', type: 'uint256', indexed: false }
    ],
    anonymous: false,
    type: 'event'
  },
  {
    name: 'StrategyMigrated',
    inputs: [
      { name: 'oldVersion', type: 'address', indexed: true },
      { name: 'newVersion', type: 'address', indexed: true }
    ],
    anonymous: false,
    type: 'event'
  },
  { name: 'StrategyRevoked', inputs: [{ name: 'strategy', type: 'address', indexed: true }], anonymous: false, type: 'event' },
  { name: 'StrategyRemovedFromQueue', inputs: [{ name: 'strategy', type: 'address', indexed: true }], anonymous: false, type: 'event' },
  { name: 'StrategyAddedToQueue', inputs: [{ name: 'strategy', type: 'address', indexed: true }], anonymous: false, type: 'event' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'initialize',
    inputs: [
      { name: 'token', type: 'address' },
      { name: 'governance', type: 'address' },
      { name: 'rewards', type: 'address' },
      { name: 'nameOverride', type: 'string' },
      { name: 'symbolOverride', type: 'string' }
    ],
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'initialize',
    inputs: [
      { name: 'token', type: 'address' },
      { name: 'governance', type: 'address' },
      { name: 'rewards', type: 'address' },
      { name: 'nameOverride', type: 'string' },
      { name: 'symbolOverride', type: 'string' },
      { name: 'guardian', type: 'address' }
    ],
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'initialize',
    inputs: [
      { name: 'token', type: 'address' },
      { name: 'governance', type: 'address' },
      { name: 'rewards', type: 'address' },
      { name: 'nameOverride', type: 'string' },
      { name: 'symbolOverride', type: 'string' },
      { name: 'guardian', type: 'address' },
      { name: 'management', type: 'address' }
    ],
    outputs: []
  },
  { stateMutability: 'pure', type: 'function', name: 'apiVersion', inputs: [], outputs: [{ name: '', type: 'string' }], gas: 5946 },
  { stateMutability: 'nonpayable', type: 'function', name: 'setName', inputs: [{ name: 'name', type: 'string' }], outputs: [], gas: 108344 },
  { stateMutability: 'nonpayable', type: 'function', name: 'setSymbol', inputs: [{ name: 'symbol', type: 'string' }], outputs: [], gas: 73194 },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'setGovernance',
    inputs: [{ name: 'governance', type: 'address' }],
    outputs: [],
    gas: 37665
  },
  { stateMutability: 'nonpayable', type: 'function', name: 'acceptGovernance', inputs: [], outputs: [], gas: 38937 },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'setManagement',
    inputs: [{ name: 'management', type: 'address' }],
    outputs: [],
    gas: 39075
  },
  { stateMutability: 'nonpayable', type: 'function', name: 'setRewards', inputs: [{ name: 'rewards', type: 'address' }], outputs: [], gas: 39626 },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'setLockedProfitDegradation',
    inputs: [{ name: 'degradation', type: 'uint256' }],
    outputs: [],
    gas: 37789
  },
  { stateMutability: 'nonpayable', type: 'function', name: 'setDepositLimit', inputs: [{ name: 'limit', type: 'uint256' }], outputs: [], gas: 39065 },
  { stateMutability: 'nonpayable', type: 'function', name: 'setPerformanceFee', inputs: [{ name: 'fee', type: 'uint256' }], outputs: [], gas: 39199 },
  { stateMutability: 'nonpayable', type: 'function', name: 'setManagementFee', inputs: [{ name: 'fee', type: 'uint256' }], outputs: [], gas: 39229 },
  { stateMutability: 'nonpayable', type: 'function', name: 'setGuardian', inputs: [{ name: 'guardian', type: 'address' }], outputs: [], gas: 41773 },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'setEmergencyShutdown',
    inputs: [{ name: 'active', type: 'bool' }],
    outputs: [],
    gas: 41844
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'setWithdrawalQueue',
    inputs: [{ name: 'queue', type: 'address[20]' }],
    outputs: [],
    gas: 1090134
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'transfer',
    inputs: [
      { name: 'receiver', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }],
    gas: 79308
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'transferFrom',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'receiver', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }],
    gas: 121671
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'approve',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }],
    gas: 38241
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'increaseAllowance',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }],
    gas: 42882
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'decreaseAllowance',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }],
    gas: 42906
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'permit',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
      { name: 'expiry', type: 'uint256' },
      { name: 'signature', type: 'bytes' }
    ],
    outputs: [{ name: '', type: 'bool' }],
    gas: 91494
  },
  { stateMutability: 'view', type: 'function', name: 'totalAssets', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 8698 },
  { stateMutability: 'nonpayable', type: 'function', name: 'deposit', inputs: [], outputs: [{ name: '', type: 'uint256' }] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'deposit',
    inputs: [{ name: '_amount', type: 'uint256' }],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'deposit',
    inputs: [
      { name: '_amount', type: 'uint256' },
      { name: 'recipient', type: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256' }]
  },
  { stateMutability: 'view', type: 'function', name: 'maxAvailableShares', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 1576655 },
  { stateMutability: 'nonpayable', type: 'function', name: 'withdraw', inputs: [], outputs: [{ name: '', type: 'uint256' }] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'withdraw',
    inputs: [{ name: 'maxShares', type: 'uint256' }],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'withdraw',
    inputs: [
      { name: 'maxShares', type: 'uint256' },
      { name: 'recipient', type: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'withdraw',
    inputs: [
      { name: 'maxShares', type: 'uint256' },
      { name: 'recipient', type: 'address' },
      { name: 'maxLoss', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'uint256' }]
  },
  { stateMutability: 'view', type: 'function', name: 'pricePerShare', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 77734 },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'addStrategy',
    inputs: [
      { name: 'strategy', type: 'address' },
      { name: 'debtRatio', type: 'uint256' },
      { name: 'minDebtPerHarvest', type: 'uint256' },
      { name: 'maxDebtPerHarvest', type: 'uint256' },
      { name: 'performanceFee', type: 'uint256' }
    ],
    outputs: [],
    gas: 1523989
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'updateStrategyDebtRatio',
    inputs: [
      { name: 'strategy', type: 'address' },
      { name: 'debtRatio', type: 'uint256' }
    ],
    outputs: [],
    gas: 124263
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'updateStrategyMinDebtPerHarvest',
    inputs: [
      { name: 'strategy', type: 'address' },
      { name: 'minDebtPerHarvest', type: 'uint256' }
    ],
    outputs: [],
    gas: 47611
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'updateStrategyMaxDebtPerHarvest',
    inputs: [
      { name: 'strategy', type: 'address' },
      { name: 'maxDebtPerHarvest', type: 'uint256' }
    ],
    outputs: [],
    gas: 47641
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'updateStrategyPerformanceFee',
    inputs: [
      { name: 'strategy', type: 'address' },
      { name: 'performanceFee', type: 'uint256' }
    ],
    outputs: [],
    gas: 42854
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'migrateStrategy',
    inputs: [
      { name: 'oldVersion', type: 'address' },
      { name: 'newVersion', type: 'address' }
    ],
    outputs: [],
    gas: 1190208
  },
  { stateMutability: 'nonpayable', type: 'function', name: 'revokeStrategy', inputs: [], outputs: [] },
  { stateMutability: 'nonpayable', type: 'function', name: 'revokeStrategy', inputs: [{ name: 'strategy', type: 'address' }], outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'addStrategyToQueue',
    inputs: [{ name: 'strategy', type: 'address' }],
    outputs: [],
    gas: 1255644
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'removeStrategyFromQueue',
    inputs: [{ name: 'strategy', type: 'address' }],
    outputs: [],
    gas: 23636673
  },
  { stateMutability: 'view', type: 'function', name: 'debtOutstanding', inputs: [], outputs: [{ name: '', type: 'uint256' }] },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'debtOutstanding',
    inputs: [{ name: 'strategy', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }]
  },
  { stateMutability: 'view', type: 'function', name: 'creditAvailable', inputs: [], outputs: [{ name: '', type: 'uint256' }] },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'creditAvailable',
    inputs: [{ name: 'strategy', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }]
  },
  { stateMutability: 'view', type: 'function', name: 'availableDepositLimit', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 21381 },
  { stateMutability: 'view', type: 'function', name: 'expectedReturn', inputs: [], outputs: [{ name: '', type: 'uint256' }] },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'expectedReturn',
    inputs: [{ name: 'strategy', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'report',
    inputs: [
      { name: 'gain', type: 'uint256' },
      { name: 'loss', type: 'uint256' },
      { name: '_debtPayment', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 1239256
  },
  { stateMutability: 'nonpayable', type: 'function', name: 'sweep', inputs: [{ name: 'token', type: 'address' }], outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'sweep',
    inputs: [
      { name: 'token', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: []
  },
  { stateMutability: 'view', type: 'function', name: 'name', inputs: [], outputs: [{ name: '', type: 'string' }], gas: 13920 },
  { stateMutability: 'view', type: 'function', name: 'symbol', inputs: [], outputs: [{ name: '', type: 'string' }], gas: 11673 },
  { stateMutability: 'view', type: 'function', name: 'decimals', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 3678 },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'balanceOf',
    inputs: [{ name: 'arg0', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3923
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'allowance',
    inputs: [
      { name: 'arg0', type: 'address' },
      { name: 'arg1', type: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 4168
  },
  { stateMutability: 'view', type: 'function', name: 'totalSupply', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 3768 },
  { stateMutability: 'view', type: 'function', name: 'token', inputs: [], outputs: [{ name: '', type: 'address' }], gas: 3798 },
  { stateMutability: 'view', type: 'function', name: 'governance', inputs: [], outputs: [{ name: '', type: 'address' }], gas: 3828 },
  { stateMutability: 'view', type: 'function', name: 'management', inputs: [], outputs: [{ name: '', type: 'address' }], gas: 3858 },
  { stateMutability: 'view', type: 'function', name: 'guardian', inputs: [], outputs: [{ name: '', type: 'address' }], gas: 3888 },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'strategies',
    inputs: [{ name: 'arg0', type: 'address' }],
    outputs: [
      { name: 'performanceFee', type: 'uint256' },
      { name: 'activation', type: 'uint256' },
      { name: 'debtRatio', type: 'uint256' },
      { name: 'minDebtPerHarvest', type: 'uint256' },
      { name: 'maxDebtPerHarvest', type: 'uint256' },
      { name: 'lastReport', type: 'uint256' },
      { name: 'totalDebt', type: 'uint256' },
      { name: 'totalGain', type: 'uint256' },
      { name: 'totalLoss', type: 'uint256' }
    ],
    gas: 22641
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'withdrawalQueue',
    inputs: [{ name: 'arg0', type: 'uint256' }],
    outputs: [{ name: '', type: 'address' }],
    gas: 4057
  },
  { stateMutability: 'view', type: 'function', name: 'emergencyShutdown', inputs: [], outputs: [{ name: '', type: 'bool' }], gas: 3978 },
  { stateMutability: 'view', type: 'function', name: 'depositLimit', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4008 },
  { stateMutability: 'view', type: 'function', name: 'debtRatio', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4038 },
  { stateMutability: 'view', type: 'function', name: 'totalDebt', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4068 },
  { stateMutability: 'view', type: 'function', name: 'lastReport', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4098 },
  { stateMutability: 'view', type: 'function', name: 'activation', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4128 },
  { stateMutability: 'view', type: 'function', name: 'lockedProfit', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4158 },
  { stateMutability: 'view', type: 'function', name: 'lockedProfitDegradation', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4188 },
  { stateMutability: 'view', type: 'function', name: 'rewards', inputs: [], outputs: [{ name: '', type: 'address' }], gas: 4218 },
  { stateMutability: 'view', type: 'function', name: 'managementFee', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4248 },
  { stateMutability: 'view', type: 'function', name: 'performanceFee', inputs: [], outputs: [{ name: '', type: 'uint256' }], gas: 4278 },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'nonces',
    inputs: [{ name: 'arg0', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 4523
  },
  { stateMutability: 'view', type: 'function', name: 'DOMAIN_SEPARATOR', inputs: [], outputs: [{ name: '', type: 'bytes32' }], gas: 4338 }
];
