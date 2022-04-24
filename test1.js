import {
  Secp256k1HdWallet,
  SigningCosmosClient,
  coins,
  coin,
  
} from "@cosmjs/launchpad";
import {
  QueryClient, setupDistributionExtension, SigningStargateClient,
  defaultRegistryTypes,
  AminoTypes
} from "@cosmjs/stargate";
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import signing from "@cosmjs/proto-signing";

// import  {MsgSwapWithinBatch}  from 'build/tendermint/liquidity/v1beta1/tx';

import { MsgSwapWithinBatch } from "comdex"
import Long from "long";



// const tx_9 = require("./build/tendermint/liquidity/v1beta1/tx");

import { chainMap } from "./assets/chains.js";

// …
const mnemonic = "";//enter mnemonic
const chain = chainMap['test-1']
const wallet = await Secp256k1HdWallet.fromMnemonic(
    mnemonic,
    {
        prefix: chain.prefix
    }
);
const [account] = await wallet.getAccounts();
console.log(account.address)

const lcdApi = "https://test-rest.comdex.one"; // Signing is offline, but from this endpoint we get the account number and sequence
const client = new SigningCosmosClient(lcdApi, account.address, wallet);

// …

const msg ={
  "typeUrl": "/comdex.liquidity.v1beta1.MsgSwapWithinBatch",
  "value": {
      "swapRequesterAddress": "comdex1x0e0ccthc4eaq0kap5tpcennyu6nrz6ndl9pc7",
      "poolId":new Long(1,0,true),            
      "swapTypeId": 1,
      "offerCoin": {
          "denom": "ucmdx",
          "amount": "10000000"
      },
      "offerCoinFee": {
          "denom": "ucmdx",
          "amount": "15000"
      },
      "demandCoinDenom": "ucgold",
      "orderPrice": "517117565316732"
  }
}    ;
const fee = {
  amount: coins(chain.min_tx_fee[1], chain.denom),
  gas: "" + chain.gas,
};

let signed = await client.sign([msg], fee);
console.log("Signed transaction:", signed);

// We can broadcast it manually later on
const result = await client.broadcastTx(signed);
console.log("Broadcasting result:", result);