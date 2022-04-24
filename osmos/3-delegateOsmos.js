import {
    QueryClient, setupDistributionExtension,SigningStargateClient

} from "@cosmjs/stargate";
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { coin,coins, Secp256k1HdWallet } from '@cosmjs/launchpad';
import { chainMap } from "../assets/chains.js";
import { validators } from "./validator.js";
import csv from 'csvtojson';


const MODE=1;

async function getQueryClient(rpcEndpoint) {
    const tendermint34Client = await Tendermint34Client.connect(rpcEndpoint);
    const queryClient = QueryClient.withExtensions(
        tendermint34Client,
        setupDistributionExtension
    );
    return queryClient;
}

async function delegate(client, address, validator, amount,chain) {
    let ops=[];
    ops.push({
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: {
            delegatorAddress: address,
            validatorAddress: validator,
            amount: coin(amount, chain.denom)
        },
    });
    const fee = {
        amount: coins(chain.min_tx_fee[MODE], chain.denom),
        gas: "" + chain.gas,
    };
    let result = await client.signAndBroadcast(address, ops, fee, '');
    console.log("Broadcasting result:", result.code===0);

}




async function start(chain,mnemonic,amount,validator) {



    const rpcEndpoint = chain.rpc;
    const wallet = await Secp256k1HdWallet.fromMnemonic(
        mnemonic,
        {
            prefix:chain.prefix
        }
    );
    const [account] = await wallet.getAccounts();
    const queryClient = await getQueryClient(rpcEndpoint);
    // let rewards = await queryClient.distribution.delegationTotalRewards(account.address);
    // let validators = [];
    // for (let reward of rewards.rewards) {
    //     validators.push(reward.validatorAddress);
    // }
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);
    await delegate(client,account.address, validator, amount,chain);
   
}
const mnemonic = "";//enter mnemonic
const amount = 1

var res = await csv().fromFile('../wallet/list10000.csv');
for (let i = 1297; i < 10000; i++) {
    const element = res[i];
    debugger
    await start(chainMap['osmosis-1'],element.MNEMONIC,1,validators[Math.round(i/130)+10].operator_address);
    console.log((i+1)+' '+element.osmo+' --------------------------')   
}


// var res = await csv().fromFile('./wallet/list10000.csv');