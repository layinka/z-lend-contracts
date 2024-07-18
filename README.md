# ZLend 
## DeFi Peer to Peer Lending DApp
DeFi Lending platform which lets you lend, borrow crypto assets and helps you earn some passive income as interest on your deposits.

Depositors are rewarded with zLend tokens for depositing into the Lending Pool. Depositors will also be able to share from the interest made on the platforms from loans.

### Screenshot
![Home](https://github.com/layinka/zLend/assets/629572/685ce6ce-ac1b-4174-bc37-f95e230e700e)


### Demo Video
[Youtube Demo ](https://youtu.be/Uh21wv3zVeQ)

## Networks supported
zLend aims to be multichain. Current networks supported are

- Etherlink testnet
- Shardeum Sphinx Testnet


# Features
1. Supported tokens are dependent on Network
2. Depositors supply some tokens to the pool to provide liquidity or collateral for loans.
3. Depositors get rewarded with ZLend token when they supply to the pool. Reward is calculated based on the token amount in dollars users supplied to the pool.
4. To borrow from the pool, User has to deposit collateral. Loans are over collaterized, and LTV (Loan To Value) ratio varies from coin to coin.
5. The contract currently supports only stable APY rate for all tokens that can be borrowed.
6. On debt repayment, the interest and token borrowed is retrieved from the user. Interest is calculated based on stable APY rate. 
7. After repayment, user can withdraw the tokens staked as collateral from lending pool.
8. On withdrawal from lending pool, contract also collects some ZLend tokens rewarded to the user. The ZLend token that will be collected from the user is equivalent in value to the amount of token user wants to withdraw.

# Tools
1. **Open Zeppelin**
2. **Chainlink/Redstone**
3. **Hardhat**
4. **Ethers Js/WAGMI/VIEM** 
5. **Angular 17**
6. **Bootstrap 5**
7. **Wallet Connect/ Coinbase wallet/ Web3Modal**



# How to use
1. Deploy solidity smart contract to all Networks ( check Contracts folder readme for deploy instructions)
2. Update DAPP with Contract addresses (/models/contract-list)
3. Run Dapp (Check Dapp folder readme for run instructions)
```
ng serve
```


## Deposits
![Deposit](https://github.com/layinka/zLend/assets/629572/12ae0a8e-fd9c-444a-8292-f81785d44e1f)
