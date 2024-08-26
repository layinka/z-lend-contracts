# ZLend 
## DeFi Peer to Peer Lending DApp
zLend is a decentralized lending protocol designed to empower educators, students, and institutions within the education ecosystem. Whether you're looking to earn passive income on your crypto assets or secure funding for educational purposes, zLend offers a flexible and innovative solution tailored for the education sector.

Depositors are rewarded with zLend tokens for depositing into the Lending Pool. Depositors will also be able to share from the interest made on the platforms from loans.

### Screenshot
![Home](https://cdn.dorahacks.io/static/files/190c60299d9a470200aa3d042c09318a.png)


### Demo Video
[Youtube Demo ](https://youtu.be/7kLVlTcrrO4)

## Networks supported
zLend is currently on the EduChain (OpenCampus) Testnet


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
![Deposit](https://cdn.dorahacks.io/static/files/190c60346559795ab72656b4f58a0e43.png)
