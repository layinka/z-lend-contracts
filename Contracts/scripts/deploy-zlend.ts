// import { ethers } from "hardhat";
// import { tokenDetails} from "./token-details";
// import hre from 'hardhat'

// // 

// // const token_address = {
// //   "dai_usd_price_feed_address": '0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9',
// //   "eth_usd_price_feed_address": '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
// //   "link_usd_price_feed_address": '0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c',
// //   "fau_usd_price_feed_address": '0x777A68032a88E5A84678A77Af2CD65A7b3c0775a',
// //   "dai_token_address": '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
// //   "weth_token_address": '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
// //   "link_token_address": '0xa36085F69e2889c224210F603D836748e7dC0088',
// //   "fau_token_address": '0xFab46E002BbF0b4509813474841E0716E6730136',
// //   "dapp_token_address": '0x984a0522DdF80dC80286e8540479B74548f7013a'
// // }

// const KEPT_BALANCE = ethers.utils.parseEther("2100000");


// async function main() {
  
//   // const networkName = hre.network.name;
//   let chainId = hre.network.config.chainId;
// 	console.log('chainId:  ', chainId );
//   // chainId = 31337;
  
//   let zLendArtifact = await ethers.getContractFactory("zLend");
//   let zLendTokenArtifact = await ethers.getContractFactory("zLendToken");
//   const MockV3AggregatorArtifact = await ethers.getContractFactory('MockV3Aggregator')
  
  

//   // const mockV3Aggregator = await (await MockV3AggregatorArtifact.deploy()).deployed();
  
  
//   const zLendToken = await zLendTokenArtifact.deploy('ZLend', 'ZLD');
//   await zLendToken.deployed();
//   console.log('zLendToken Deployed at  ', zLendToken.address );

//   const [owner] = await ethers.getSigners();
  
//   console.log('owner:  ', owner?.address??'no add field' );
  

//   const zLend = await zLendArtifact.deploy(zLendToken.address);
//   await zLend.deployed();
//   console.log('zLend Deployed at  ', zLend.address );

//   // transfer tokens to contract
//   var total = await zLendToken.totalSupply()
  
//   const txTransfer = await zLendToken.transfer(zLend.address, total.sub( KEPT_BALANCE) );
//   await txTransfer.wait();
   
//   for(const token of tokenDetails[chainId!]){
//     const tAddr = chainId==31337 ? await getTokenAddress(chainId, token.name ) : await getNewTokenAddress(chainId, token.name );
//     console.log('Adding token ',  token.name, ' with address ', tAddr, ' and feed address ',  token.feed_address)
//     const tx = await zLend.addTokenToPriceFeedMapping(tAddr, token.feed_address);
//     await tx.wait();

//     const tx2 = await zLend.addTokensForLending(token.name, tAddr, token.LTV, token.borrow_stable_rate, token.interest_rate);
//     await tx2.wait();

//     const tx3 = await zLend.addTokensForBorrowing(token.name, tAddr, token.LTV, token.borrow_stable_rate, token.interest_rate);
//     await tx3.wait();


//   }
  
// }


// async function getNewTokenAddress (chainId, symbol){
//   // if(chainId==31337){ //local
//   //   let tokenArtifact = await ethers.getContractFactory("Token");  
//   //   const token = await tokenArtifact.deploy(symbol, symbol);
//   //   await token.deployed();
//   //   return token.address;
//   // }

//   let tokenArtifact = await ethers.getContractFactory("Token");  
//   const token = await tokenArtifact.deploy(symbol, symbol);
//   await token.deployed();
//   return token.address;

  
// }


// async function getTokenAddress (chainId, symbol){
//   // if(chainId==31337){ //local
//   //   let tokenArtifact = await ethers.getContractFactory("Token");  
//   //   const token = await tokenArtifact.deploy(symbol, symbol);
//   //   await token.deployed();
//   //   return token.address;
//   // }

//   const coin = tokenDetails[chainId].find(f=>f.name==symbol);
//   if(coin){
//     try {
//       impersonateAndTransferAsset(coin.holder_to_impersonate,'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', coin.address, 1000 ); // DAI
//     } catch (error) {
//       console.error(error);
//     }

//     try {
//       impersonateAndTransferAsset(coin.holder_to_impersonate,'0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', coin.address, 1000 );
//     } catch (error) {
//       console.error(error);
//     }
    

//     return coin.address;
//   }
//   return undefined;
// }


// async function impersonateAndTransferAsset(owner: string,impersonator: string, tokenAddress: string, amountToSend: number) {
//   const impersonatedSigner = await ethers.getImpersonatedSigner(owner);
//   let tokenArtifact = await ethers.getContractFactory("Token"); 
//   let tx = await tokenArtifact.connect(impersonatedSigner).attach(tokenAddress).transfer(impersonator, ethers.utils.parseEther(amountToSend.toString()));
//   await tx.wait();
// }





// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });




