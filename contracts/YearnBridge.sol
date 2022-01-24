// SPDX-License-Identifier: GPLv2

pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import {SafeMath} from '@openzeppelin/contracts/math/SafeMath.sol';
import {Math} from '@openzeppelin/contracts/math/Math.sol';
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {SafeERC20} from '@openzeppelin/contracts/token/ERC20/SafeERC20.sol';

import {IDefiBridge} from './interfaces/IDefiBridge.sol';
import {Types} from './Types.sol';

interface IYVault {
    function token() external pure returns (address);

    function deposit(uint256 amount) external returns (uint256);

    function withdraw(uint256 shares) external returns (uint256);
}

contract YearnBridge is IDefiBridge {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    address public immutable rollupProcessor;
    IYVault public immutable yearnVault;

    constructor(address _rollupProcessor, address _yearnVault) public {
        rollupProcessor = _rollupProcessor;
        yearnVault = IYVault(_yearnVault);
    }

    receive() external payable {}

    function convert(
        Types.AztecAsset calldata inputAssetA,
        Types.AztecAsset calldata,
        Types.AztecAsset calldata outputAssetA,
        Types.AztecAsset calldata,
        uint256 inputValue,
        uint256,
        uint64
    )
        external
        payable
        override
        returns (
            uint256,
            uint256,
            bool
        )
    {
        require(msg.sender == rollupProcessor, 'YearnBridge: INVALID_CALLER');
        require(
            inputAssetA.assetType == Types.AztecAssetType.ERC20 && outputAssetA.assetType == Types.AztecAssetType.ERC20,
            'YearnBridge: INVALID_CALL'
        );
        require(outputAssetA.erc20Address == yearnVault.token() || outputAssetA.erc20Address == address(yearnVault), 'YearnBridge: INVALID_OUTPUT');

        /**
            Convert tokens into shares
            0. Approve yearn to spend token
            1. deposit tokens to yearn vault
            2. send shares back to rollup processor
            3. returns (shares, 0, false)
         */
        if (inputAssetA.assetType == Types.AztecAssetType.ERC20 && inputAssetA.erc20Address == yearnVault.token()) {
            IERC20(yearnVault.token()).safeIncreaseAllowance(address(yearnVault), uint256(-1));
            uint256 shares = yearnVault.deposit(inputValue);
            IERC20(address(yearnVault)).safeTransfer(rollupProcessor, shares);
            return (shares, 0, false);
        }

        /**
            Convert shares into token
            1. withdraw shares from yearn vault
            2. send tokens back to rollup processor
            3. returns (tokens, 0, false)
         */
        if (inputAssetA.assetType == Types.AztecAssetType.ERC20 && inputAssetA.erc20Address == address(yearnVault)) {
            uint256 tokens = yearnVault.withdraw(inputValue);
            IERC20(yearnVault.token()).safeTransfer(rollupProcessor, tokens);
            return (tokens, 0, false);
        }

        require(false, 'YearnBridge: UNSUPPORTED');
    }

    function canFinalise(uint256) external view override returns (bool) {
        return false;
    }

    function finalise(
        Types.AztecAsset calldata,
        Types.AztecAsset calldata,
        Types.AztecAsset calldata,
        Types.AztecAsset calldata,
        uint256,
        uint64
    ) external payable override returns (uint256, uint256) {
        require(false);
    }
}
