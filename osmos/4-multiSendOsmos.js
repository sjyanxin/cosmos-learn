import { SigningStargateClient } from "@cosmjs/stargate";
import pkg from '@cosmjs/launchpad';
import csv from 'csvtojson';
import {env} from '../wallet/env.js'

async function multiSend(client, from, recipients) {
    let ops = [];
    for (let recipient of recipients) {
        let msg = {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: {
                fromAddress: from,
                toAddress: recipient,
                amount: pkg.coins(1, "uosmo")
            },
        };
        ops.push(msg);
    }
    const fee = {
        amount: pkg.coins(0, "uosmo"),
        gas: "250000",
    };
    let result = await client.signAndBroadcast(from, ops, fee, '');
    console.log("Broadcasting result:", result.code ===0);

}

async function start() {
    const mnemonic = env.MNEMONICS;
       // const addresses =["osmo1elvkx5j07szgdqt44uhf875axdvgtwxxtq32ln"];//enter addresses
    const rpcEndpoint = "https://rpc.cosmos.directory/osmosis";
    const wallet = await pkg.Secp256k1HdWallet.fromMnemonic(
        mnemonic, {
            prefix: 'osmo',
          }
    );
    const [account] = await wallet.getAccounts();
    
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);
    var res = await csv().fromFile('../wallet/list10000.csv');
    var temp=[]
    for (let i = 9234; i < 10000; i++) {
        const element = res[i];
        temp.push(element.osmo);
        debugger
        if(temp.length===4){    
            await multiSend(client, account.address,temp)
            console.log((i+1)+' --------------------------')
            temp=[];
        }
    
    }
}



start();

//      var res = await csv().fromFile('./wallet/list10000.csv');
//   var temp=[]
//   for (let i = 9; i < 11; i++) {
//       const element = res[i];
//       temp.push(element.osmo);
//       if(temp.length===10){    
//           debugger    
//           start(temp);
//         //   temp=[];

//       }
//   }