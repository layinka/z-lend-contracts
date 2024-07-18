// import { expect } from "chai";
// import { ethers } from "hardhat";
// import {advanceTimeTo, getCurrentBlockTimeStamp, takeSnapshot, revertToSnapshot} from './utils';
// const { MerkleTree } = require('merkletreejs');
// const keccak256 = require('keccak256');


// describe("CampaignList", function () {
  
//    this.timeout(100000);

//   const now = new Date();
//   const thirtySecondsTime = now.setSeconds(now.getSeconds()+15);
//   const twoHoursTime = now.setHours(now.getHours()+2);
//   const fourHoursLater = now.setHours(now.getHours()+4);
//   const thirtyDaysLater = now.setDate(now.getDate()+30);
//   let CampaignFactoryArtifact: any = undefined;
//   let TokenArtifact: any = undefined;
//   let CampaignArtifact:any  = undefined;
//   let DexLockerFactoryArtifact = undefined;
//   let FactoryV2Artifact = undefined;
//   let RouterV2Artifact = undefined;
//   let WBNBV2Artifact = undefined;

//   let routerv2;

//   //let router = '0xeD37AEDD777B44d34621Fe5cb1CF594dc39C8192';
//   //let router = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";// 

//   /* (BTTC Testnet)
// 	  CampaignList
// Factory Address: 0xb40E51f657EFa934D43A05cd4cC9f0a11faA05d0
// WBNB Address: 0xED2E8410ECd1e71dDd0d9E045dc8ADA7C4509278
// Router Address: 0x932102Bc1916f9d74E271dB6685aba0276f112F2 
//   */
//   // let router = "0x932102Bc1916f9d74E271dB6685aba0276f112F2";// BTTC Test
//   let router = "0x0Be73fE84d0220f80A480Bc33eF976a9124826c1";//Meter testnet


//   let  campaignFactory: any;
//   let campaign:any;
//   let  token: any;
//   let campaignAddress: string;
//   const softCap = ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei');
//   const hardCap = ethers.utils.formatUnits( ethers.utils.parseEther("0.2"), 'wei')
  

//   before('Initialize and Deploy SmartContracts', async () => {
      
//       CampaignFactoryArtifact = await ethers.getContractFactory("CampaignList");
//       TokenArtifact = await ethers.getContractFactory("Token");
//       CampaignArtifact = await ethers.getContractFactory("Campaign");
//       DexLockerFactoryArtifact = await ethers.getContractFactory("DexLockerFactory");
//       const DexLockerArtifact = await ethers.getContractFactory("DexLocker");
//       const CoinVestingVaultArtifact = await ethers.getContractFactory("CoinVestingVault");

//       FactoryV2Artifact = await ethers.getContractFactory("PancakeFactory");
//       RouterV2Artifact = await ethers.getContractFactory("PancakeRouter");
//       WBNBV2Artifact = await ethers.getContractFactory("WBNB");

//       const [owner] = await ethers.getSigners();
//    //    const factoryv2 = await FactoryV2Artifact.deploy(owner.address);
//    //    await factoryv2.deployed();

//    //    const wbnb = await WBNBV2Artifact.deploy();
//    //    await wbnb.deployed();

//    //    routerv2 = await RouterV2Artifact.deploy(factoryv2.address, wbnb.address);
//    //    await routerv2.deployed();

//    //    router = routerv2.address;

// 	  // console.log("Factory Address:", factoryv2.address);
// 	  // console.log("WBNB Address:", wbnb.address);
// 	  // console.log("Router Address:", routerv2.address)


//       token = await TokenArtifact.deploy();
//       await token.deployed();
//       console.log('Token1 Deployed at  ', token.address );

//       // const token2 = await TokenArtifact.deploy();
//       // await token2.deployed();
//       // console.log('Token2 Deployed at  ', token2.address );


//       let campaignImplementation = await CampaignArtifact.deploy();
//       await campaignImplementation.deployed();
//       console.log('Campaign Implemntation Deployed at  ', campaignImplementation.address );

//       let dexLockerImplementation = await DexLockerArtifact.deploy();
//       await dexLockerImplementation.deployed();
//       console.log('dexLocker Implemntation Deployed at  ', dexLockerImplementation.address );

//       let coinVault = await CoinVestingVaultArtifact.deploy();
//       await coinVault.deployed();
//       console.log('coinVesting Implemntation Deployed at  ', coinVault.address );
      
//       const dexLockerFactory = await DexLockerFactoryArtifact.deploy(dexLockerImplementation.address, coinVault.address);
//       await dexLockerFactory.deployed();
      
//       campaignFactory = await CampaignFactoryArtifact.deploy(dexLockerFactory.address , campaignImplementation.address);
//       await campaignFactory.deployed();
//       console.log('Using Campaign List Deployed at  ', campaignFactory.address );




//       /*
//       Token2 Deployed at   0x54B15d18c32032767d55AEB199ae488708cF6845
// Campaign Implemntation Deployed at   0xE47050824F0Ec836a3A0EA0bfcdBfbF4743bEe77
// dexLocker Implemntation Deployed at   0x6A75daCCA1fAeFec99F20f88866b4a3F6cD61467
// coinVesting Implemntation Deployed at   0x54DB465CAdd676690DBbe1fDa03FE532fDa44628
// Using Campaign List Deployed at   0xA1C16951Ad300Be8D2fb2976303d52ABa5Aa1b25*/

// 		// campaignFactory = await CampaignFactoryArtifact.attach('0xA1C16951Ad300Be8D2fb2976303d52ABa5Aa1b25');
      
//   });

//   async function createNewCampaign(start: any,end: any){
//     const [owner] = await ethers.getSigners();
//     const token = await TokenArtifact.deploy();
//     await token.deployed();
//     const createCampaignTx = await campaignFactory.createNewCampaign(token.address,
//         [
//           softCap,
//           hardCap, 
//           start ,//  Math.floor(new Date().getTime() / 1000) , // twoHoursTime, thirtySecondsTime
//           end , 
//           ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//           ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//           ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//           ethers.utils.formatUnits( ethers.utils.parseEther("1"), 'wei'),
//           ethers.utils.formatUnits( ethers.utils.parseEther("1"), 'wei'),
//           '0'
//         ] 
//           ,0,router,[6000,30, 1000,800],
//         //founderinfo
//         //[formData.logo,'',formData.website, formData.twitter, formData.telegram, formData.discord ]
//         ['https://place-hold.it/110','dsec', 'https://testtoken.org','https://twitter.com/test','https://testtoken.org', 'http://discord.me'],
//         [true,false],
//           //teamtokenvesting
//           [
//           {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.05"), hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.05"), hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false}
//         ],
        
//         [0,0,0],
        
          
//         {  
//           value: ethers.utils.parseEther("0.0001") 
//         });
//     let txResult =   await createCampaignTx.wait();
    
//     const campaignAddress = txResult.events.filter((f: any)=>f.event=='CampaignCreated')[0].args['createdCampaignAddress'];
//     console.log('New CampaignAddress: ', campaignAddress );
//     return  {
//       campaign: CampaignArtifact.attach(campaignAddress),
//       token: token
//     };
//   }



//   it("Should create new campaign", async function () {
//     const [owner] = await ethers.getSigners();
//     const createCampaignTx = await campaignFactory.createNewCampaign(token.address,
//         [
//           softCap,
//           hardCap, 
//           Math.floor(thirtySecondsTime/1000),//  Math.floor(new Date().getTime() / 1000) , // twoHoursTime, thirtySecondsTime
//           Math.floor(thirtyDaysLater/1000), 
//           ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//           ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//           ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//           ethers.utils.formatUnits( ethers.utils.parseEther("1"), 'wei'),
//           ethers.utils.formatUnits( ethers.utils.parseEther("1"), 'wei'),
//           '0'
//         ] 
//           ,0,router,[6000,30, 1000,800],
//         //founderinfo
//         //[formData.logo,'',formData.website, formData.twitter, formData.telegram, formData.discord ]
//         ['https://place-hold.it/110','dsec', 'https://testtoken.org','https://twitter.com/test','https://testtoken.org', 'http://discord.me'],
//         [true,false],
//           //teamtokenvesting
//           [
//           {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.05"), hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.05"), hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//           {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false}
//         ],
        
//         [0,0,0],
        
          
//         {  
//           value: ethers.utils.parseEther("0.0001") ,
//           gasLimit: 20000000,
//         });
//     let txResult =   await createCampaignTx.wait();
//     console.log('Done: ' );
//     campaignAddress = txResult.events.filter((f: any)=>f.event=='CampaignCreated')[0].args['createdCampaignAddress'];
//     console.log('New CampaignAddress: ', campaignAddress );
//     campaign = CampaignArtifact.attach(campaignAddress);
//     expect(await campaignFactory.campaignSize()).to.equal(1);
//   });

  
  

//   // it('updates  contract details successfully', async() => {

    
//   //   let error;
//   //   try{
//   //     const [owner] = await ethers.getSigners();
//   //     const now = new Date();
      
//   //     const timeLater = now.setSeconds(now.getSeconds() + (60*30));
        
//   //     let { campaign:cmp, token} = await createNewCampaign(Math.floor(timeLater/1000),Math.floor(thirtyDaysLater/1000.0));

//   //     // console.log('getCurrentBlockTimeStamp:', await getCurrentBlockTimeStamp()); 
      
//   //     const updateCampaignTx = await cmp.updateCampaignDetails('logourl', 'desc', 'websiteurl','twitter','telegram');
        
//   //     let txResult =   await updateCampaignTx.wait();
      
//   //     expect(txResult.status).to.equal(1);
      
      
//   //   }catch(err){
      
      
//   //     error=err;
//   //   }
//   //   expect(error).to.equal(undefined);
    
    

//   // });

//   // it('campaignlist should return correct campaign address for token address', async() => {
//   //       const returnedAddress = await campaignFactory.tryGetCampaignByTokenAddress(token.address);
//   //       expect(returnedAddress).to.equal(campaignAddress);
//   // });

//   // it('stops duplicates contract for the same token except when cancelled', async() => {

      
//   //     let createError;
//   //     const initialSize = await campaignFactory.campaignSize();
//   //     try{
//   //       const createCampaignTx = await campaignFactory.createNewCampaign(token.address,
//   //       [ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),ethers.utils.formatUnits( ethers.utils.parseEther("0.2"), 'wei'), twoHoursTime, fourHoursLater, 
        
//   //       ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//   //         ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//   //         ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei'),
//   //         ethers.utils.formatUnits( ethers.utils.parseEther("1"), 'wei'),
//   //         ethers.utils.formatUnits( ethers.utils.parseEther("1"), 'wei'),
//   //         '0'
//   //       ] 
//   //         ,0,router,[6000,30, 1000,800],
//   //         [
//   //         {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.05"), hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.05"), hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false}
//   //       ],
//   //       [
//   //         {releaseDate: fourHoursLater, releaseAmount:  ethers.utils.parseEther("0.02"), hasBeenClaimed: false}, //25% of 0.08 being raisedfunds - raisedfundsUsedForLiquidity
//   //         {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: ethers.utils.parseEther("0.02"), hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false},
//   //         {releaseDate: fourHoursLater, releaseAmount: '0', hasBeenClaimed: false}
//   //       ], 

//   //       [true,false],
          
//   //         {  
//   //           value: ethers.utils.parseEther("1.0") 
//   //         });

//   //       let txResult =   await createCampaignTx.wait();

                 
//   //     }catch(err){
//   //       // console.error('Error duplicating: ', err);
        
//   //       createError=err;
//   //     }
//   //     expect(createError).to.not.equal(undefined);
//   //     expect(initialSize  - await campaignFactory.campaignSize()).to.equal(0);
      

//   // });

  

//   // it('submits initial token to contract successfully', async() => {

    
//   //   let error;
//   //   try{
      
//   //     const [owner] = await ethers.getSigners();
//   //     let cmp = campaign; //CampaignArtifact.attach(campaignAddress);

//   //     let campaignStatus = await cmp.getCampaignStatus();
      
//   //     let vestingTokens = await cmp.totalTokensExpectedToBeLocked();
            
//   //     // Arrpove contract with correct allowance
      
//   //     let txAllowance = await token.approve(campaignFactory.address, vestingTokens);
//   //     await txAllowance.wait();
      
//   //     const transferTokenTx = await campaignFactory.transferTokens(campaignAddress);        
//   //     let txResult =   await transferTokenTx.wait();

//   //     // console.log('owner balance after:', (await token.balanceOf(owner.address)).toString())
//   //     expect(txResult.status).to.equal(1);

//   //     campaignStatus = await cmp.getCampaignStatus();
      
//   //     expect(campaignStatus).to.equal(1);

//   //   }catch(err){
      
//   //     console.error(err)
//   //     error=err;
//   //   }
//   //   expect(error).to.equal(undefined);
    
    

//   // });

//   // it('accepts bids succesfully for non whitelisted sale', async() => {

    
//   //   let error;
//   //   let snapshotId;
//   //   try{
//   //     this.timeout(5000)
//   //     const [owner2, newSigner] = await ethers.getSigners();
//   //     const b4Balance = ethers.utils.formatUnits(await ethers.provider.getBalance(campaignAddress));
      
//   //     snapshotId = await takeSnapshot();
//   //     await advanceTimeTo(Math.floor(thirtySecondsTime/1000) );
//   //     let cmp = CampaignArtifact.attach(campaignAddress);

//   //     let campaignContractAsNewSigner = cmp.connect(newSigner);

//   //     let tx = await campaignContractAsNewSigner.submitBid([], {
//   //       value: ethers.utils.parseEther('0.1')
//   //     } );
//   //     let txRes = await tx.wait(); 
          
//   //     const afterBalance = ethers.utils.formatUnits(await ethers.provider.getBalance(campaignAddress));
      
//   //     expect(parseFloat( afterBalance)).to.gt(parseFloat(b4Balance));
//   //     expect(txRes.confirmations).to.gt(0);

//   //   }catch(err){
      
//   //     console.error(err)
//   //     error=err;
//   //   }finally{
//   //     if(snapshotId){
//   //         await revertToSnapshot(snapshotId);
//   //     }
      
//   //   }
//   //   expect(error).to.equal(undefined);
    
    

//   // });

//   // it('accepts bids succesfully for whitelisted sale', async() => {

    
//   //   let error;
//   //   let snapshotId;
//   //   try{
//   //     this.timeout(5000)
//   //     const [owner, owner2, newSigner,tSigner,fSigner] = await ethers.getSigners();

      
//   //     const now = new Date();
      
//   //     const timeLater = now.setSeconds(now.getSeconds() + (60*30));
        
//   //     let {campaign:cmp,token} = await createNewCampaign(Math.floor(timeLater/1000),Math.floor(thirtyDaysLater/1000.0));
//   //      //add eligible droppers
//   //     const whitelist=[owner.address, owner2.address, newSigner.address,tSigner.address,fSigner.address];
            
//   //     let vestingTokens = await cmp.totalTokensExpectedToBeLocked();
//   //     let txAllowance = await token.approve(campaignFactory.address, vestingTokens);
//   //     let txR = await txAllowance.wait();      
//   //     expect(txR.status).to.equal(1);

//   //     const transferTokenTx = await campaignFactory.transferTokens(cmp.address);        
//   //     let txResult =   await transferTokenTx.wait();

//   //     // Get elligble addresses - use address 0 - 10
//   //     const leafNodes = whitelist.map((i,ix) => {        
//   //       const packed = ethers.utils.solidityPack(["address"], [ i])
//   //       // return keccak256(i, toWei(ix));
//   //       return keccak256(packed);        
//   //     })

      
//   //     // Generate merkleTree from leafNodes
//   //     const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
//   //     // Get root hash from merkle tree
//   //     const merkleRoot = merkleTree.getRoot();
      
//   //     let tx2 = await cmp.submitTier2Whitelist( merkleRoot, {
//   //     });
//   //     await tx2.wait();

//   //     const b4Balance = ethers.utils.formatUnits(await ethers.provider.getBalance(cmp.address));
      
//   //     snapshotId = await takeSnapshot();
//   //     await advanceTimeTo(Math.floor(timeLater/1000) );

//   //     const packed = ethers.utils.solidityPack(["address"], [ newSigner.address])
//   //     const proof = merkleTree.getHexProof(keccak256(packed))

//   //     let campaignContractAsNewSigner = cmp.connect(newSigner);

//   //     let tx = await campaignContractAsNewSigner.submitBid(proof, {
//   //       value: ethers.utils.parseEther('0.1')
//   //     } );
//   //     let txRes = await tx.wait();
          
//   //     const afterBalance = ethers.utils.formatUnits(await ethers.provider.getBalance(cmp.address));
      
//   //     expect(parseFloat( afterBalance)).to.gt(parseFloat(b4Balance));
//   //     expect(txRes.confirmations).to.gt(0);

//   //   }catch(err){
      
//   //     console.error(err)
//   //     error=err;
//   //   }finally{
//   //     if(snapshotId){
//   //         await revertToSnapshot(snapshotId);
//   //     }
      
//   //   }
//   //   expect(error).to.equal(undefined);
    
    

//   // });

//   // it('allows to finalize succesfully when at least softcap is hit', async() => {//softcap already transferred in previoud step

    
//   //   let error, snapshotId;
//   //   try{
//   //     this.timeout(5000)
//   //     const [owner, newSigner] = await ethers.getSigners();
      
//   //     const b4Balance = ethers.utils.formatUnits(await ethers.provider.getBalance(campaignAddress));      
//   //     snapshotId = await takeSnapshot();
//   //     await advanceTimeTo(Math.floor(thirtySecondsTime/1000) );
      
//   //     let cmp = CampaignArtifact.attach(campaignAddress);

//   //     let campaignContractAsNewSigner = cmp.connect(newSigner);

//   //     let txTransfer = await campaignContractAsNewSigner.submitBid([], {
//   //       value: ethers.utils.parseEther('0.1')
//   //     } );
//   //     let txResTransfer = await txTransfer.wait(); 

//   //     const balance = ethers.utils.formatUnits(await ethers.provider.getBalance(campaignAddress));      
//   //     expect(parseFloat( balance)).to.gte(parseFloat('0.1'));
      
//   //     const endTime = await campaign.getEndDate();
//   //     advanceTimeTo( parseInt( ethers.utils.formatUnits(endTime.add( 1), '0')) );

      
//   //     const gasFeeData = await ethers.provider.getFeeData();
//   //     const tx = await campaign.finalizeAndSetupLiquidity({
        
//   //       maxFeePerGas: gasFeeData.maxFeePerGas,// should use geasprice for bsc, since it doesnt support eip 1559 yet
//   //       maxPriorityFeePerGas: gasFeeData.maxPriorityFeePerGas
//   //     });

//   //     const txRes = await tx.wait();          
      
//   //     expect(txRes.confirmations).to.gt(0);
//   //     expect(txRes.status).to.equal(1);

//   //     const campaignStatus = await campaign.getCampaignStatus();      
//   //     expect(campaignStatus).to.equal(4);

//   //   }catch(err){
      
//   //     console.error(err)
//   //     error=err;
//   //   }finally{
//   //     if(snapshotId){
//   //         await revertToSnapshot(snapshotId);
//   //     }
      
//   //   }
//   //   expect(error).to.equal(undefined);
    
    

//   // });

//   // it('accepts whitelist succesfully', async() => {

    
//   //   let error;
    
//   //   try{
//   //     this.timeout(5000)
//   //     const [owner, owner2, newSigner,tSigner,fSigner] = await ethers.getSigners();
     
//   //     const now = new Date();      
//   //     const timeLater = now.setSeconds(now.getSeconds() + (60*30));
        
//   //     let {campaign:cmp,token} = await createNewCampaign(Math.floor(timeLater/1000),Math.floor(thirtyDaysLater/1000.0));
//   //      //add eligible droppers
//   //     const whitelist=[owner.address, owner2.address, newSigner.address,tSigner.address,fSigner.address];
       
//   //     const leafNodes = whitelist.map((i,ix) => {        
//   //       const packed = ethers.utils.solidityPack(["address"], [ i])
//   //       // return keccak256(i, toWei(ix));
//   //       return keccak256(packed);        
//   //     })

//   //     // Generate merkleTree from leafNodes
//   //     const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
//   //     // Get root hash from merkle tree
//   //     const merkleRoot = merkleTree.getRoot();
      
//   //     let tx2 = await cmp.submitTier2Whitelist( merkleRoot, {
//   //     });
//   //     const txRes = await tx2.wait();

//   //     expect(txRes.confirmations).to.gt(0);

//   //   }catch(err){
      
//   //     console.error(err)
//   //     error=err;
//   //   }
//   //   expect(error).to.equal(undefined);
    
    

//   // });




// });



// // describe("ConfirmAddress", async function () {
  
  

 
// //   let ConfirmAddressArtifact ;
  

// //   const router = '0xeD37AEDD777B44d34621Fe5cb1CF594dc39C8192';
// //   let userAccount :any ;
// //   let confirmAddContract :any;
  

// //   before('Initialize and Deploy SmartContracts', async () => {
      
// //     ConfirmAddressArtifact = await ethers.getContractFactory("ConfirmAddress");
// //     userAccount = (await ethers.getSigners())[0];

    
// //     confirmAddContract = await ConfirmAddressArtifact.deploy();
// //     await confirmAddContract.deployed();
// //     console.log('Confirm Address Deployed at  ', confirmAddContract.address );
      
// //   });


// //   it("Should return true when a contract address is sent to it", async function () {
// //     const TokenArtifact = await ethers.getContractFactory("Token");
// //     const token = await TokenArtifact.deploy();
// //     await token.deployed();
    
// //     let addToCheck = token.address;
// //     let isContractCheck = await confirmAddContract.isContract(addToCheck);
// //     expect(isContractCheck).to.equal(true);
// //   });

  
  

// //   it('Should return false when a non-contract address is sent to it', async() => {
// //     let addToCheck = userAccount.address;
// //     let isContractCheck = await confirmAddContract.isContract(addToCheck);
// //     expect(isContractCheck).to.equal(false);
    

// //   });



// // });


