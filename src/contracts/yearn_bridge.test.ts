import { ethers } from 'hardhat';
import hre from 'hardhat';
import abi from '../artifacts/contracts/YearnBridge.sol/YearnBridge.json';
import { Contract, Signer } from 'ethers';
import { DefiBridgeProxy, AztecAssetType } from './defi_bridge_proxy';
import { formatEther, parseEther } from '@ethersproject/units';
import { YEARN_ABI } from '../abi/yearn';
import { ERC20_ABI } from '../abi/erc20';

describe('lido defi bridge', function () {
  let bridgeProxy: DefiBridgeProxy;
  let yearnBridgeAddress: string;
  let yearnVaultAddress: string;
  let yfiTokenAddress: string;
  let signer: Signer;
  let signerAddress: string;

  beforeEach(async () => {
    // reset balance and impersonation each time since amount can change
    await hre.network.provider.request({
      method: 'hardhat_reset',
      params: [
        {
          forking: {
            jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
            blockNumber: 14050596
          }
        }
      ]
    });

    yearnVaultAddress = '0xdb25ca703181e7484a155dd612b06f57e12be5f0';
    yfiTokenAddress = '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e';
    signerAddress = '0x967159C42568A54D11a4761fC86a6089eD42B7ba';

    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [signerAddress]
    });

    signer = await ethers.getSigner(signerAddress);
    bridgeProxy = await DefiBridgeProxy.deploy(signer);
    yearnBridgeAddress = await bridgeProxy.deployBridge(signer, abi, [yearnVaultAddress]);

    await signer.sendTransaction({
      to: bridgeProxy.address,
      value: parseEther('1')
    });
  });

  it('should able to convert tokens to shares then shares to tokens', async () => {
    /**
     * Convert shares back to tokens
     * Verify getting tokens back
     */

    let tx = null;
    const yfiAmount = parseEther('10');

    // Send 10 YFI to bridge proxy
    const yfiContract = new Contract(yfiTokenAddress, ERC20_ABI, signer);
    tx = await yfiContract.transfer(bridgeProxy.address, yfiAmount);
    await tx.wait();

    const bridgeYFIBalance = await yfiContract.balanceOf(bridgeProxy.address);
    expect(bridgeYFIBalance.toString()).toBe(yfiAmount.toString());

    // convert yfi tokens to vault shares
    const { isAsync, outputValueA, outputValueB } = await bridgeProxy.convert(
      signer,
      yearnBridgeAddress,
      {
        assetType: AztecAssetType.ERC20,
        id: 0,
        erc20Address: yfiTokenAddress
      },
      {},
      {
        assetType: AztecAssetType.ERC20,
        id: 1,
        erc20Address: yearnVaultAddress
      },
      {},
      yfiAmount.toBigInt(),
      1n,
      0n
    );

    expect(isAsync).toBe(false);

    // hardcode at current block for now. We can also calculate this number by looking at the current share price (shares/supply)
    expect(outputValueA).toBe(9893395147577763788n);

    // convert shares back to tokens
    const res = await bridgeProxy.convert(
      signer,
      yearnBridgeAddress,
      {
        assetType: AztecAssetType.ERC20,
        id: 1,
        erc20Address: yearnVaultAddress
      },
      {},
      {
        assetType: AztecAssetType.ERC20,
        id: 0,
        erc20Address: yfiTokenAddress
      },
      {},
      outputValueA,
      2n,
      0n
    );

    expect(res.isAsync).toBe(false);

    // account for withdrawal slippage, performance fee, management fee
    expect(res.outputValueA).toBeGreaterThan((yfiAmount.toBigInt() * BigInt(99999)) / BigInt(100000));
  });
});
