import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";


dotenv.config();

task("accounts", "Prints the list of accounts").setAction( async (taskArgs: any, hre: any) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// task("balance", "Prints an account's balance")
//   .addParam("account", "The account's address")
//   .setAction(async () => {});


const config: HardhatUserConfig = {
   solidity: {
   	compilers: [
	      {
	        version: "0.5.16",
	        settings: {
					
					optimizer: {
						enabled: true,
						runs: 200,
						
					}
				}
	      },
	      {
	        version: "0.6.6",
	        settings: {
					
					optimizer: {
						enabled: true,
						runs: 200,
						
					}
				}
	      },
	      {
	      	version: "0.8.4",
				settings: {
					// viaIR : true,
					optimizer: {
						enabled: true,
						runs: 200,
						// details: {
						//   yul: true
						// }
					}
				}
	      },
	      {
	      	version: "0.8.17",
				settings: {
					// viaIR : true,
					optimizer: {
						enabled: true,
						runs: 200,
						// details: {
						//   yul: true
						// }
					}
				}
	      }
	   ],
	   
   },
   networks: {
		hardhat: {
			// allowUnlimitedContractSize: false,
			chainId: 31337,
			// forking: {
			// 	// url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
			// 	url: 'https://matic-mainnet-archive-rpc.bwarelabs.com',
			// 	//blockNumber: 15888727,// Eth Mainnet
			// 	blockNumber: 37225566 //polygon
			// }
			// // mining: {
			// //   auto: false,
			// //   interval: 5000,
			// //   mempool: {
			// //     order: "fifo"
			// //   }
			// // }
		},
		ropsten: {
			url: process.env.ROPSTEN_URL || "",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
		},
		mumbai: {
			url: "https://rpc-mumbai.maticvigil.com",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 80001,
		},
		matic: {
			// Infura
			// url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
			url: "https://rpc-mainnet.maticvigil.com",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 137
		},

		klaytyn_t: {
			url: "https://api.baobab.klaytn.net:8651",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 1001
		},
		klaytyn: {
			url: " https://public-node-api.klaytnapi.com/v1/cypress",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 8217
		},

		xinfin: {
			url: "https://erpc.xinfin.network",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 50
		},
		apothem: {
			url: "https://erpc.apothem.network",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 51
		},
		
		auroratest: {
			url: 'https://testnet.aurora.dev/',
			chainId: 1313161555,
			accounts:['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'] ,
		},
		meter_testnet: {
			url: "https://rpctest.meter.io",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 83,
		},
		meter_mainnet: {
			url: "https://rpc.meter.io",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 82,
		},
		celo_testnet: {
			url: "https://alfajores-forno.celo-testnet.org",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 44787,
		},
		celo: {
			url: "https://forno.celo.org",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 42220,
		},
		findora: {
			url: "https://rpc-mainnet.findora.org",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 2152,
		},
		findora_testnet: {
			url: "https://prod-testnet.prod.findora.org:8545",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
			chainId: 2153,
		},
		bsctestnet: {
		   url: "https://data-seed-prebsc-1-s1.binance.org:8545",
		   chainId: 97,
		   gasPrice: 20000000000,
		   accounts: {mnemonic: ''}
		},
		bsc: {
		   url: "https://bsc-dataseed.binance.org/",
		   chainId: 56,
		   gasPrice: 20000000000,
		   accounts: {mnemonic: ''}
		 },
		bttc_testnet: {
		   url: "https://pre-rpc.bt.io/",
		   accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
		   chainId: 1029,
		 },
		bttc: {
		   url: "https://rpc.bt.io",
		   accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2] : [],
		   chainId: 199,
		 },
		evmos_t: {
			url: 'https://eth.bd.evmos.dev:8545',
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2!] : [],
			chainId: 9000,
		},


		etherlink_t: {
			url: 'https://node.ghostnet.etherlink.com',
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2!] : [],
			chainId: 128123,
		},

		shardeum_t: {// sphinx
			url: "https://sphinx.shardeum.org/",
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2!] : [],
			chainId: 8082,
		},
		"dchain_t":{
			url: "https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io",
			accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2!] : [],
			
			chainId: 2713017997578000
		}
    },
	namedAccounts: {
		deployer: 0,
		tokenOwner: 1,
	},


};

export default config;
