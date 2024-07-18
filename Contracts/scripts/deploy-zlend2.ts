import { ethers } from "hardhat";
import { tokenDetails} from "./token-details";
import hre from 'hardhat'

// 

// const token_address = {
//   "dai_usd_price_feed_address": '0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9',
//   "eth_usd_price_feed_address": '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
//   "link_usd_price_feed_address": '0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c',
//   "fau_usd_price_feed_address": '0x777A68032a88E5A84678A77Af2CD65A7b3c0775a',
//   "dai_token_address": '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
//   "weth_token_address": '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
//   "link_token_address": '0xa36085F69e2889c224210F603D836748e7dC0088',
//   "fau_token_address": '0xFab46E002BbF0b4509813474841E0716E6730136',
//   "dapp_token_address": '0x984a0522DdF80dC80286e8540479B74548f7013a'
// }

const KEPT_BALANCE = ethers.utils.parseEther("2100000");


async function main() {
  
  // const networkName = hre.network.name;
  let chainId = hre.network.config.chainId!;
	console.log('chainId:  ', chainId );
  if(!chainId) chainId = 31337;
  
  let zLendArtifact = await ethers.getContractFactory("zLend2");
  let zLendTokenArtifact = await ethers.getContractFactory("zLendToken");
  let tokenArtifact = await ethers.getContractFactory("Token");
  let wethArtifact = await ethers.getContractFactory("WETH9");
  // const MockV3AggregatorArtifact = await ethers.getContractFactory('MockV3Aggregator')
  
  const [owner] = await ethers.getSigners();

  // const mockV3Aggregator = await (await MockV3AggregatorArtifact.deploy()).deployed();
  
  
  const zLendToken = await zLendTokenArtifact.deploy('ZLend', 'ZLD');
  await zLendToken.deployed();
  console.log('zLendToken Deployed at  ', zLendToken.address );

  const tokens=[]
//   const tokens = [
//     '0x17A9757BD7259492ac4b70224607D47b6BCD6B65',
// '0x8d8926eA7d883B7F5F03E833b812D7ecECac1126',
// '0xC40e2D6aD3480DFDdE52E84378039a84134019D1',
// '0x435126A30803eaBdaa0aFC10Fd5355C8d00966e4'
//   ]
  //@ts-ignore
  for (let index = 0; index < tokenDetails[chainId].length; index++) {
    //@ts-ignore
    const e = tokenDetails[chainId][index]
    let t;

    if(e.useAddressInList){
      if(e.wrapped){
        t = wethArtifact.attach(e.address).connect(owner);          
        //deposit in wrapped token contract 
        if(chainId==31337){
          t.deposit({value: ethers.utils.parseEther('2')})
        }         
        
      }else{
        t = tokenArtifact.attach(e.address).connect(owner)
      }
    }else{
      if(e.wrapped){
        t = await wethArtifact.deploy(e.name, e.name);
        await t.deployed();  
        //deposit in wrapped token contract 
        if(chainId==31337){
          t.deposit({value: ethers.utils.parseEther('2')})
        }
          
        
      }else{
        t = await tokenArtifact.deploy(e.name, e.name);
        await t.deployed();
      }
    }

    
    //const t = await tokenArtifact.deploy(e.name, e.name);
    
    console.log(`${e.wrapped?'Wrapped Token':'Token'} Deployed at  `, t.address, ', ', e.name );
    tokens.push(t.address)
  }


  
  
  
  

  const zLend = await zLendArtifact.deploy(zLendToken.address);
  await zLend.deployed();
  console.log('zLend Deployed at  ', zLend.address );

  // transfer tokens to contract
  var total = await zLendToken.totalSupply()
  
  const txTransfer = await zLendToken.transfer(zLend.address, total.sub( KEPT_BALANCE) );
  await txTransfer.wait();
   
  // for(const token of tokenDetails[chainId]){
  //   const tAddr = chainId==31337 ? await getTokenAddress(chainId, token.name ) : await getNewTokenAddress(chainId, token.name );
  //   console.log('Adding token ',  token.name, ' with address ', tAddr, ' and feed address ',  token.feed_address)
  //   // const tx = await zLend.updateTokenPrice(tAddr, ethers.utils.parseUnits(token.toUsd.toFixed(2), 0));
  //   const tx = await zLend.updateTokenPrice(tAddr, ethers.utils.parseUnits(token.toUsd.toString(), token.decimal), token.decimal.toFixed(0) );
  //   await tx.wait();

  //   const tx2 = await zLend.addTokensForLending(token.name, tAddr, token.LTV, token.borrow_stable_rate, token.interest_rate);
  //   await tx2.wait();

  //   const tx3 = await zLend.addTokensForBorrowing(token.name, tAddr, token.LTV, token.borrow_stable_rate, token.interest_rate);
  //   await tx3.wait();


  // }

  //@ts-ignore
  for(let index = 0; index < tokenDetails[chainId].length; index++){
    const token = tokenDetails[chainId!][index];
    const tokenAddress = tokens[index];
    await setupTokenOnZLend(token, tokenAddress);


  }

  const zLendTokenDetails={
    name: 'ZLD',
    
    LTV: ethers.utils.parseUnits ("0.55"), // Loan-to-Value (LTV) Ratio, Lower is better
    interest_rate: ethers.utils.parseUnits ("0.011"), // interest paid to depositors
    borrow_stable_rate: ethers.utils.parseUnits ("0.015"), // interest paid by borrowers
    toUsd: 0.01,
    decimal: 18
}
  await setupTokenOnZLend(zLendTokenDetails, zLendToken.address)

  console.log(`Outputted Contracts for Chain ${chainId}: `, JSON.stringify({
    zLend: zLend.address, 
    zLendTokenAddress: zLendToken.address,
  }, null, 1))
  

  async function setupTokenOnZLend(token: any, tokenAddress: string) {
    // const tAddr = token.address;
    
    // console.log('Adding token ',  token.name, ' with address ', tAddr, ' and feed address ',  token.feed_address)
    // const tx = await zLend.updateTokenPrice(tAddr, ethers.utils.parseUnits(token.toUsd.toFixed(2), 0));
    const tx = await zLend.updateTokenPrice(tokenAddress, ethers.utils.parseUnits((token.toUsd ?? 0).toString(), token.decimal), token.decimal?.toFixed(0));
    //const tx = await zLend.updateTokenPrice(tAddr, 0, token.decimal.toFixed(0) );
    await tx.wait();

    const tx2 = await zLend.addTokensForLending(token.name, tokenAddress, token.LTV, token.borrow_stable_rate, token.interest_rate);
    await tx2.wait();

    const tx3 = await zLend.addTokensForBorrowing(token.name, tokenAddress, token.LTV, token.borrow_stable_rate, token.interest_rate);
    await tx3.wait();
  }
}


async function getNewTokenAddress (chainId: any, symbol: any){
  // if(chainId==31337){ //local
  //   let tokenArtifact = await ethers.getContractFactory("Token");  
  //   const token = await tokenArtifact.deploy(symbol, symbol);
  //   await token.deployed();
  //   return token.address;
  // }

  let tokenArtifact = await ethers.getContractFactory("Token");  
  const token = await tokenArtifact.deploy(symbol, symbol);
  await token.deployed();
  return token.address;

  
}


async function getTokenAddress (chainId: any, symbol: any){
  // if(chainId==31337){ //local
  //   let tokenArtifact = await ethers.getContractFactory("Token");  
  //   const token = await tokenArtifact.deploy(symbol, symbol);
  //   await token.deployed();
  //   return token.address;
  // }

  const coin = tokenDetails[chainId].find(f=>f.name==symbol);
  if(coin){
    try {
      impersonateAndTransferAsset(coin.holder_to_impersonate??'','0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', coin.address, 1000 ); // DAI
    } catch (error) {
      console.error(error);
    }

    try {
      impersonateAndTransferAsset(coin.holder_to_impersonate??'','0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', coin.address, 1000 );
    } catch (error) {
      console.error(error);
    }
    

    return coin.address;
  }
  return undefined;
}


async function impersonateAndTransferAsset(owner: string,impersonator: string, tokenAddress: string, amountToSend: number) {
  const impersonatedSigner = await ethers.getImpersonatedSigner(owner);
  let tokenArtifact = await ethers.getContractFactory("Token"); 
  let tx = await tokenArtifact.connect(impersonatedSigner).attach(tokenAddress).transfer(impersonator, ethers.utils.parseEther(amountToSend.toString()));
  await tx.wait();
}





// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




