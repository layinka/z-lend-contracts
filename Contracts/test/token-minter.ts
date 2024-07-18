// import { expect } from "chai";
// import { ethers } from "hardhat";



// describe("TokenMinter", function () {
  
//   this.timeout(100000);

//   const now = new Date();
//   const thirtySecondsTime = now.setSeconds(now.getSeconds()+15);
//   const twoHoursTime = now.setHours(now.getHours()+2);
//   const fourHoursLater = now.setHours(now.getHours()+4);
//   const thirtyDaysLater = now.setDate(now.getDate()+30);
//   let TokenMinterFactoryArtifact: any = undefined;
//   let SimpleErc20Artifact: any = undefined;
//   let StandardTokenArtifact: any = undefined;

//   let TokenMinterCloneableFactoryArtifact: any = undefined;
//   let SimpleErc20CloneableArtifact: any = undefined;

//   let  tokenMinterFactory: any;
//   let  tokenMinter: any;
//   let  token: any;
//   let tokenAddress: string;

//   let  tokenMinterCloneable: any;

//   const softCap = ethers.utils.formatUnits( ethers.utils.parseEther("0.1"), 'wei');
//   const hardCap = ethers.utils.formatUnits( ethers.utils.parseEther("0.2"), 'wei')
  

//   before('Initialize and Deploy SmartContracts', async () => {
      
//     TokenMinterFactoryArtifact = await ethers.getContractFactory("TokenMinterFactory");
//     SimpleErc20Artifact = await ethers.getContractFactory("SimpleERC20");
//     StandardTokenArtifact = await ethers.getContractFactory("StandardERC20");

//     TokenMinterCloneableFactoryArtifact = await ethers.getContractFactory("TokenMinterFactoryCloneable");
//     SimpleErc20CloneableArtifact = await ethers.getContractFactory("SimpleERC20Cloneable");

//     tokenMinter = await TokenMinterFactoryArtifact.deploy();
//     await tokenMinter.deployed();
//     console.log('Using Token Minter Factory Deployed at  ', tokenMinter.address );

//     tokenMinterCloneable = await TokenMinterCloneableFactoryArtifact.deploy();
//     await tokenMinterCloneable.deployed();
//     console.log('Using Token Minter Cloneable Factory Deployed at  ', tokenMinterCloneable.address );
      
//   });

  



//   it("Should create new SimpleToken", async function () {
//     const [owner] = await ethers.getSigners();
//     const createTx = await tokenMinter.createNewToken(0,'Test', 'TEST',18,ethers.utils.parseEther("1000000") ,
//         {  
//           value: ethers.utils.parseEther("0.001") 
//         });
//     let txResult =   await createTx.wait();
    
//     tokenAddress = txResult.events.filter((f: any)=>f.event=='TokenCreated')[0].args['createdTokenAddress'];
//     console.log('TokenAddress: ', tokenAddress );
//     token = SimpleErc20Artifact.attach(tokenAddress);

//     console.log('factory balance after:', (await token.balanceOf(tokenMinter.address)).toString())
//     console.log('owner balance after:', (await token.balanceOf(owner.address)).toString())
//     expect(await tokenMinter.tokensCount()).to.equal(1);
//     expect(await tokenMinter.getTokenTypeCount(0)).to.equal(1);

    
//   });

//   it("Should create new Cloneable SimpleToken", async function () {
//     const [owner] = await ethers.getSigners();
//     const createTx = await tokenMinterCloneable.createNewToken(0,'Test', 'TEST',18,ethers.utils.parseEther("1000000") ,
//         {  
//           value: ethers.utils.parseEther("0.001") 
//         });
//     let txResult =   await createTx.wait();
    
//     let tokenAddress = txResult.events.filter((f: any)=>f.event=='TokenCreated')[0].args['createdTokenAddress'];
//     console.log('TokenAddress: ', tokenAddress );
//     let token = SimpleErc20CloneableArtifact.attach(tokenAddress);

//     console.log('factory balance after:', (await token.balanceOf(tokenMinterCloneable.address)).toString())
//     console.log('owner balance after:', (await token.balanceOf(owner.address)).toString())
//     expect(await tokenMinterCloneable.tokensCount()).to.equal(1);
//     expect(await tokenMinterCloneable.getTokenTypeCount(0)).to.equal(1);

    
//   });


//   // it("Should create new StandardToken", async function () {
//   //   const [owner] = await ethers.getSigners();
//   //   const createTx = await tokenMinter.createNewToken(1,'TestStandard', 'TESTSTANDARD',18,ethers.utils.parseEther("1000000") ,
//   //       {  
//   //         value: ethers.utils.parseEther("0.0015") 
//   //       });
//   //   let txResult =   await createTx.wait();
    
//   //   tokenAddress = txResult.events.filter((f: any)=>f.event=='TokenCreated')[0].args['createdTokenAddress'];
//   //   console.log('TokenAddress: ', tokenAddress );
//   //   let token2 = StandardTokenArtifact.attach(tokenAddress);

//   //   console.log('2. factory balance after:', (await token2.balanceOf(tokenMinter.address)).toString())
//   //   console.log('2. owner balance after:', (await token2.balanceOf(owner.address)).toString())
//   //   expect(await tokenMinter.tokensCount()).to.equal(2);
//   //   expect(await tokenMinter.getTokenTypeCount(1)).to.equal(1);

    
//   // });

  
  

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






// });

