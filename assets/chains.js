export const chainMap = {
    "cosmoshub-4":{
        name:'cosmos',
        rpc:'https://rpc.cosmos.directory/cosmoshub',
        symbol:'ATOM',
        denom: "uatom",
        exponent: 6,
        min_tx_fee: ["312","0"],
        gas:200000,
        prefix:"cosmos",
        claim_min:0.1,
        collect_min:0.1
    },
    "osmosis-1":{
        name:'osmosis',
        rpc:'https://rpc.cosmos.directory/osmosis',
        symbol:'OSMO',
        denom: "uosmo",
        exponent: 6,
        min_tx_fee: ["0","0"],
        gas:250000,
        prefix:"osmo",
        claim_min:0.1,
        collect_min:0.1
    },
    "juno-1":{
        name:'juno',
        rpc:'https://rpc.cosmos.directory/juno',
        symbol:'JUNO',
        denom: "ujuno",
        exponent: 6,
        min_tx_fee: ["625","0"],
        gas:120000,
        prefix:"juno",
        claim_min:0.1,
        collect_min:0.1
    },
    "akashnet-2":{
        name:'akash-network',
        rpc:'https://rpc.cosmos.directory/akash',
        symbol:'AKT',
        denom: "uakt",
        exponent: 6,
        min_tx_fee: ["3000","120"],
        gas:120000,
        prefix:"akash",
        claim_min:1,
        collect_min:1

    },
    "stargaze-1":{
        name:'stargaze',
        rpc:'https://rpc.cosmos.directory/stargaze',
        symbol:'STARS',
        denom: "ustars",
        exponent: 6,
        min_tx_fee: ["0","0"],
        gas:800000,
        prefix:"stars",
        claim_min:100,
        collect_min:100
    },
    "chihuahua-1":{
        name:'chihuahua',
        rpc:'https://chihuahua-rpc.mercury-nodes.net/',
        symbol:'HUAHUA',
        denom: "uhuahua",
        exponent: 6,
        min_tx_fee: ["8000","8000"],
        gas:160000,
        prefix:"chihuahua",
        claim_min:100,
        collect_min:100
    },
    "likecoin-mainnet-2":{
        name:'likecoin',
        rpc:'https://rpc.cosmos.directory/likecoin',
        symbol:'LIKE',
        denom: "nanolike",
        exponent: 9,
        min_tx_fee: ["0","0"],
        gas:160000,
        prefix:"cosmos",
        claim_min:10,
        collect_min:10
    },
    "regen-1":{
        name:'regen',
        rpc:'https://rpc.cosmos.directory/regen',
        symbol:'REGEN',
        denom: "uregen",
        exponent: 6,
        min_tx_fee: ["2400","2400"],
        gas:160000,
        prefix:"regen",
        claim_min:10,
        collect_min:10
    },
    "cerberus-chain-1":{
        name:'cerberus',
        rpc:'https://rpc.cosmos.directory/cerberus',
        symbol:'CRBRUS',
        denom: "ucrbrus",
        exponent: 6,
        min_tx_fee: ["4000","0"],
        gas:160000,
        prefix:"cerberus",
        claim_min:100,
        collect_min:100
    },
    "secret-4":{
        name:'secretnetwork',
        rpc:'https://secret-4.api.trivium.network:26657/',
        hd_path:"m/44'/529'/0'/0/0",
        symbol:'SCRT',
        denom: "uscrt",
        exponent: 6,
        min_tx_fee: ["4000","4000"],
        gas:160000,
        prefix:"secret",
        claim_min:0.5,
        collect_min:1
    },
    "columbus-5":{
        chain_id:'columbus-5',
        name:'terra',
        rpc:'http://public-node.terra.dev:26657',
        rest:'https://lcd.terra.dev',
        hd_path:"m/44'/330'/0'/0/0",
        symbol:'LUNA',
        denom: "uluna",
        exponent: 6,
        min_tx_fee: ["4000","2000"],
        gas:160000,
        prefix:"terra",
        claim_min:0.5,
        collect_min:1
    },
    "test-1":{
        chainId: "test-1",
        denom: "ucmdx",
        chainName: "Comdex Test Chain",
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        min_tx_fee: ["6250000","100000"],
        gas:4500000,
        maxGas:4500000,
        prefix: "comdex",
        rpc: "https://test-rpc.comdex.one",
        rest: "https://test-rest.comdex.one",
        explorer: "https://dev-explorer.comdex.one"
    }
}