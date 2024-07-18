import { ethers } from "hardhat";
export const tokenDetails: {
    [index: number]: {
        name: string;
        address: string;
        feed_address: string;
        LTV: any;
        interest_rate: any;
        borrow_stable_rate: any;
        wrapped?: boolean;
        holder_to_impersonate? : string;
        toUsd?: number;
        decimal?: number;
        useAddressInList?: boolean;
    }[];
} = {
    137: [
        {
            name: "DAI",
            address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            feed_address: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers

        },
        {
            name: "LINK",
            address: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
            feed_address: "0xd9FFdb71EbE7496cC440152d43986Aae0AB76665",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        },
        {
            name: "WETH",
            address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
            feed_address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
            LTV: ethers.utils.parseUnits ("0.8"), 
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        }
    ],
    80001: [
        {
            name: "DAI",
            address: "0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1",
            feed_address: "0x0FCAa9c899EC5A91eBc3D5Dd869De833b06fB046",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers

        },
        {
            name: "LINK",
            address: "0xa36085F69e2889c224210F603D836748e7dC0088",
            feed_address: "0x1C2252aeeD50e0c9B64bDfF2735Ee3C932F5C408",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        },
        {
            name: "WETH",
            address: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
            feed_address: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
            LTV: ethers.utils.parseUnits ("0.8"), 
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        }
    ],
    31337: [
        {
            name: "wETH",
            address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            feed_address: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
            holder_to_impersonate: '0xdfd74e3752c187c4ba899756238c76cbeefa954b',
            toUsd: 2670,
            decimal: 18,
            wrapped: true
        },
        {
            name: "DAI",
            address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            feed_address: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
            holder_to_impersonate: '0xdfd74e3752c187c4ba899756238c76cbeefa954b',
            toUsd: 0.99,
            decimal: 18
        },
        {
            name: "LINK",
            address: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
            feed_address: "0xd9FFdb71EbE7496cC440152d43986Aae0AB76665",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
            holder_to_impersonate: '0xb97a32d95a31a504c3db28ddd574f21c700edbee',
            toUsd: 0.99,
            decimal: 18
        }
    ],
    1001: [
        {
            name: "WEMIX",
            address: "0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1",
            feed_address: "0x76Aa17dCda9E8529149E76e9ffaE4aD1C4AD701B",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers

        },
        {
            name: "LINK",
            address: "0xa36085F69e2889c224210F603D836748e7dC0088",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        }
    ],

    51: [
        {
            name: "WXDC",
            address: "0xe99500ab4a413164da49af83b9824749059b46ce",
            feed_address: "0x76Aa17dCda9E8529149E76e9ffaE4aD1C4AD701B",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.011"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
            toUsd: 0.0257643,
            decimal: 7
        },
        {
            name: "LINK",
            address: "0x0b3a3769109f17af9d3b2fa52832b50d600a9b1a",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
            toUsd: 5.70,
            decimal: 2
        }
    ],

    9000: [
        {
            name: "mTEVMOS",
            address: "0xe99500ab4a413164da49af83b9824749059b46ce",
            feed_address: "0x76Aa17dCda9E8529149E76e9ffaE4aD1C4AD701B",
            LTV: ethers.utils.parseUnits ("0.7"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.019"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.0215"), // interest paid by borrowers
            toUsd: 0.095580 ,
            decimal: 18
        },
        {
            name: "Dai",
            address: "0x0b3a3769109f17af9d3b2fa52832b50d600a9b1a",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.010"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.02"), // interest paid by borrowers
            toUsd: 0.992,
            decimal: 18
        },
        {
            name: "USDC",
            address: "0x0b3a3769109f17af9d3b2fa52832b50d600a9b1a",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.85"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.017"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.03"), // interest paid by borrowers
            toUsd: 0.910,
            decimal: 6
        },
        {
            name: "USDT",
            address: "0x0b3a3769109f17af9d3b2fa52832b50d600a9b1a",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.011"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.027"), // interest paid by borrowers
            toUsd: 0.99,
            decimal: 18
        }

    ],

    8082: [ //Shardeum
        {
            name: "wSHM",
            address: "0xe99500ab4a413164da49af83b9824749059b46ce",
            feed_address: "0x76Aa17dCda9E8529149E76e9ffaE4aD1C4AD701B",
            LTV: ethers.utils.parseUnits ("0.6"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.019"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.0215"), // interest paid by borrowers
            toUsd: 0.095580 ,
            decimal: 18,
            wrapped: true
        },
        // {
        //     name: "Dai",
        //     address: "0x0b3a3769109f17af9d3b2fa52832b50d600a9b1a",
        //     feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
        //     LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
        //     interest_rate: ethers.utils.parseUnits ("0.010"), // interest paid to depositors
        //     borrow_stable_rate: ethers.utils.parseUnits ("0.02"), // interest paid by borrowers
        //     toUsd: 0.992,
        //     decimal: 18
        // },
        {
            name: "USDC",
            address: "0x0b3a3769109f17af9d3b2fa52832b50d600a9b1a",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.85"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.017"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.03"), // interest paid by borrowers
            toUsd: 0.910,
            decimal: 6
        },
        {
            name: "USDT",
            address: "0x0b3a3769109f17af9d3b2fa52832b50d600a9b1a",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.011"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.027"), // interest paid by borrowers
            toUsd: 0.99,
            decimal: 18
        }

    ],

    128123: [
        {
            name: "wXTZ",
            address: "0x9DbbE6c9E569AF9A78EcA2bd478830B9a8C117dB",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.75"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.017"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.03"), // interest paid by borrowers
            toUsd: 0.9977,
            decimal: 6,
            wrapped:true,
            useAddressInList:true
        },
        {
            name: "USDC",
            address: "0x91F2BEDC51b10fEFFc17eA6CCc0DA985b5F25a3B",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.85"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.017"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.03"), // interest paid by borrowers
            toUsd: 0.99910,
            decimal: 6,
            useAddressInList:true
        },
        {
            name: "USDT",
            address: "0x043C8d950F59d49B072eAacDACc1Cd1635936981",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.011"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.027"), // interest paid by borrowers
            toUsd: 0.99932,
            decimal: 18,
            useAddressInList:true
        },
        
    ],
    2713017997578000: [
        {
            name: "wETH",
            address: "0x9DbbE6c9E569AF9A78EcA2bd478830B9a8C117dB",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.75"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.017"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.03"), // interest paid by borrowers
            toUsd: 3452.59,
            decimal: 18,
            wrapped:true,
            useAddressInList:false
        },
        {
            name: "USDC",
            address: "0x91F2BEDC51b10fEFFc17eA6CCc0DA985b5F25a3B",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.85"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.017"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.03"), // interest paid by borrowers
            toUsd: 0.99910,
            decimal: 6,
            useAddressInList:false
        },
        {
            name: "USDT",
            address: "0x043C8d950F59d49B072eAacDACc1Cd1635936981",
            feed_address: "0xf49f81b3d2F2a79b706621FA2D5934136352140c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.011"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.027"), // interest paid by borrowers
            toUsd: 0.99932,
            decimal: 18,
            useAddressInList:false
        },
        
    ]
}