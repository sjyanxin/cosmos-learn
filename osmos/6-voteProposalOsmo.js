import {
    SigningStargateClient
} from "@cosmjs/stargate";
import { coins, Secp256k1HdWallet } from '@cosmjs/launchpad'
import { chainMap } from "../assets/chains.js";
import csv from 'csvtojson';

async function voteProposal(client, proposalId, address, option) {
    let ops = [];
    let msg = {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: {
            proposalId: proposalId,
            voter: address,
            option: option
        },
    };
    ops.push(msg);

    const fee = {
        amount: coins(0, "uosmo"),
        gas: "250000",
    };
    let result = await client.signAndBroadcast(address, ops, fee, '');
    console.log("Broadcasting result:",proposalId, result.code===0);

}


async function start(rpcEndpoint,mnemonic) {
    // const rpcEndpoint = "https://rpc.cosmos.directory/osmosis";
    const wallet = await Secp256k1HdWallet.fromMnemonic(
        mnemonic, {
            prefix: 'osmo',
          }
    );
    const [account] = await wallet.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);
    await voteProposal(client, "206", account.address, 1);
    await voteProposal(client, "207", account.address, 2);
    await voteProposal(client, "208", account.address, 2);
    await voteProposal(client, "209", account.address, 2);
    await voteProposal(client, "210", account.address, 2);

}
var res = await csv().fromFile('../wallet/list10000.csv');
for (let i = 188; i < 10000; i++) {
    const element = res[i];
    await start(chainMap['osmosis-1'].rpc,element.MNEMONIC);
    console.log((i+1)+' '+element.osmo+' --------------------------')   
}

