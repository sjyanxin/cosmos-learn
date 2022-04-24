import {
  QueryClient,
  setupDistributionExtension,
  SigningStargateClient,
  defaultRegistryTypes,
  AminoTypes,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { coin, coins, Secp256k1HdWallet } from "@cosmjs/launchpad";
import signing from "@cosmjs/proto-signing";

import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import {createInterface} from "readline";

// import  {MsgSwapWithinBatch}  from 'build/tendermint/liquidity/v1beta1/tx';

import {
  MsgSwapWithinBatch,
  MsgCreateRequest,
  MsgDepositWithinBatch,
} from "comdex";
import Long from "long";
import csv from "csvtojson";

import { chainMap } from "./assets/chains.js";

const MODE = 1;
const msgDepositWithinBatchUrl =
  "/comdex.liquidity.v1beta1.MsgDepositWithinBatch";

async function getQueryClient(rpcEndpoint) {
  const tendermint34Client = await Tendermint34Client.connect(rpcEndpoint);
  const queryClient = QueryClient.withExtensions(
    tendermint34Client,
    setupDistributionExtension
  );
  return queryClient;
}

async function swap(client, address, chain) {
  let ops = [];

  const fee = {
    amount: coins(chain.min_tx_fee[MODE], chain.denom),
    gas: "" + chain.gas,
  };
  // {"message":{"typeUrl":"/comdex.liquidity.v1beta1.MsgSwapWithinBatch","value":{"swapRequesterAddress":address,"poolId":{"low":1,"high":0,"unsigned":true},"swapTypeId":1,"offerCoin":{"denom":"ucmdx","amount":"10000000"},"offerCoinFee":{"denom":"ucmdx","amount":"15000"},"demandCoinDenom":"ucgold","orderPrice":"517117565316732"}},"fee":{"amount":[{"denom":"ucmdx","amount":"100000"}],"gas":"2500000"},"memo":""}

  const coinTypes = ['ucgold','ucsilver', "ucoil"];

  const orderPrices = [
    "507943578524152","24491086000000000000", "99965006540000002048",
  ];
  var msg = {
    typeUrl: "/comdex.liquidity.v1beta1.MsgSwapWithinBatch",
    value: {
      swapRequesterAddress: address,
      poolId: new Long(1, 0, true),
      swapTypeId: 1,
      offerCoin: {
        denom: "ucmdx",
        amount: "100000000",
      },
      offerCoinFee: {
        denom: "ucmdx",
        amount: "150000",
      },
      demandCoinDenom: "ucgold",
      orderPrice: "517117565316732",
    },
  };
  ops.push(msg);
  for (let i = 0; i < coinTypes.length; i++) {
    msg.value.demandCoinDenom = coinTypes[i];
    msg.value.orderPrice = orderPrices[i];
    msg.value.poolId = new Long(i + 1, 0, true);
    console.log("Broadcasting param:", JSON.stringify(msg));
    let result = await client.signAndBroadcast(address, ops, fee, "");
    console.log("Broadcasting result:", result);
  }
}

async function borrow(client, address, chain) {
  let ops = [];

  const fee = {
    amount: coins(chain.min_tx_fee[MODE], chain.denom),
    gas: "" + chain.gas,
  };
  // {"message":{"typeUrl":"/comdex.liquidity.v1beta1.MsgSwapWithinBatch","value":{"swapRequesterAddress":address,"poolId":{"low":1,"high":0,"unsigned":true},"swapTypeId":1,"offerCoin":{"denom":"ucmdx","amount":"10000000"},"offerCoinFee":{"denom":"ucmdx","amount":"15000"},"demandCoinDenom":"ucgold","orderPrice":"517117565316732"}},"fee":{"amount":[{"denom":"ucmdx","amount":"100000"}],"gas":"2500000"},"memo":""}

  const coinTypes = [
    { amountIn: "1000000", amountOut: "293" },
    {
      amountIn: "1000000",
      amountOut: "23003",
    },
    {
      amountIn: "1000000",
      amountOut: "5560",
    },
  ];

  var msg = {
    typeUrl: "/comdex.vault.v1beta1.MsgCreateRequest",
    value: {
      from: address,
      pairId: new Long(1, 0, true),
      amountIn: "1000000",
      amountOut: "293",
    },
  };
  ops.push(msg);
  for (let i = 0; i < coinTypes.length; i++) {
    msg.value.amountIn = coinTypes[i].amountIn;
    msg.value.amountOut = coinTypes[i].amountOut;
    msg.value.  pairId=new Long(i+1, 0, true),
    console.log("Broadcasting param:", JSON.stringify(msg));
    let result = await client.signAndBroadcast(address, ops, fee, "");
    console.log("Broadcasting result:", result);
  }
}
async function farm(client, address, chain) {
  let ops = [];

  const fee = {
    amount: coins(chain.min_tx_fee[MODE], chain.denom),
    gas: "" + chain.gas,
  };
  // {"message":{"typeUrl":"/comdex.liquidity.v1beta1.MsgSwapWithinBatch","value":{"swapRequesterAddress":address,"poolId":{"low":1,"high":0,"unsigned":true},"swapTypeId":1,"offerCoin":{"denom":"ucmdx","amount":"10000000"},"offerCoinFee":{"denom":"ucmdx","amount":"15000"},"demandCoinDenom":"ucgold","orderPrice":"517117565316732"}},"fee":{"amount":[{"denom":"ucmdx","amount":"100000"}],"gas":"2500000"},"memo":""}

  const coinTypes = [
    [
        { denom: "ucgold", amount: "25654" },
        { denom: "ucmdx", amount: "50000000" },
      ],
      [{"denom":"ucmdx","amount":"50000000"},{"denom":"ucsilver","amount":"2062103"}],
      [{"denom":"ucmdx","amount":"50000000"},{"denom":"ucoil","amount":"505215"}]
  ];



  var msg = {
    typeUrl: "/comdex.liquidity.v1beta1.MsgDepositWithinBatch",
    value: {
      depositorAddress: address,
      poolId:new Long(1, 0, true),
      depositCoins: [
        { denom: "ucgold", amount: "21278" },
        { denom: "ucmdx", amount: "50000000" },
      ],
    },
  };

  ops.push(msg);
  for (let i = 0; i < coinTypes.length; i++) {
    msg.value.depositCoins = coinTypes[i];
    msg.value.poolId = new Long(i+1, 0, true);
    console.log("Broadcasting param:", JSON.stringify(msg));
    let result = await client.signAndBroadcast(address, ops, fee, "");
    console.log("Broadcasting result:", result);
  }
}

async function start(chain, mnemonic, amount) {
  const rpcEndpoint = chain.rpc;
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: chain.prefix,
  });
  const [account] = await wallet.getAccounts();
//   const balance =  await wallet.queryClient.bank.balance()
//   console.log(balance);
  console.log(account.address);
//   return
  // const queryClient = await getQueryClient(rpcEndpoint);
  // let rewards = await queryClient.distribution.delegationTotalRewards(account.address);
  // let validators = [];
  // for (let reward of rewards.rewards) {
  //     validators.push(reward.validatorAddress);
  // }

  const typeUrl = "/comdex.liquidity.v1beta1.MsgSwapWithinBatch";

  const customRegistry = new signing.Registry(defaultRegistryTypes);
  customRegistry.register(typeUrl, MsgSwapWithinBatch);
  customRegistry.register(
    "/comdex.vault.v1beta1.MsgCreateRequest",
    MsgCreateRequest
  );
  customRegistry.register(
    msgDepositWithinBatchUrl,
    MsgDepositWithinBatch
  );


  const customAminoTypes = new AminoTypes({
    prefix: "comdex?", // not sure if this has to be "cosmos" or the custom prefix of our bech32addresses
    additions: {
      "/comdex.liquidity.v1beta1.MsgSwapWithinBatch": {
        aminoType: "comdex/MsgSwapWithinBatch",
        toAmino: ({
          swapRequesterAddress,
          poolId,
          swapTypeId,
          offerCoin,
          offerCoinFee,
          demandCoinDenom,
          orderPrice,
        }) => {
          return {
            swap_requester_address: swapRequesterAddress,
            pool_id: poolId,
            swap_type_id: swapTypeId,
            offer_coin: offerCoin,
            offer_coin_fee: offerCoinFee,
            demand_coin_denom: demandCoinDenom,
            order_price: orderPrice,
          };
        },
        fromAmino: ({
          swap_requester_address,
          pool_id,
          swap_type_id,
          offer_coin,
          offer_coin_fee,
          demand_coin_denom,
          order_price,
        }) => {
          return {
            swapRequesterAddress: swap_requester_address,
            poolId: pool_id,
            swapTypeId: swap_type_id,
            offerCoin: offer_coin,
            offerCoinFee: offer_coin_fee,
            demandCoinDenom: demand_coin_denom,
            orderPrice: order_price,
          };
        },
      },
      "/comdex.vault.v1beta1.MsgCreateRequest": {
        aminoType: "comdex/MsgCreateRequest",
        toAmino: ({ amountIn, amountOut, from, pairId }) => {
          return {
            amount_in: amountIn,
            amount_out: amountOut,
            from: from,
            pair_id: pairId,
          };
        },
        fromAmino: ({ amount_in, amount_out, from, pair_id }) => {
          return {
            amountIn: amount_in,
            amountOut: amount_out,
            from: from,
            pairId: pair_id,
          };
        },
      },
      msgDepositWithinBatchUrl : {
        aminoType: "comdex/MsgDepositWithinBatch",
        toAmino: ({ depositCoins, depositorAddress, poolId }) => {
          return {
            deposit_coins: depositCoins,
            depositor_address: depositorAddress,         
            pool_id: poolId,
          };
        },
        fromAmino: ({ deposit_coins, depositor_address, pool_id }) => {
          return {
            depositCoins: deposit_coins,
            depositorAddress: depositor_address,
            poolId: pool_id,
          };
        },
      },
    },
  });

  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    {
      registry: customRegistry,
      aminoTypes: customAminoTypes,
      prefix: "comdex?",
    }
  );
  // const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet, { registry: customRegistry } );
  // const { account_number, sequence } =  (await client.auth.account(account.address))
  // .result.value
  //  client.registry.register("/comdex.liquidity.v1beta1.MsgSwapWithinBatch",MsgSwapWithinBatch );

  await swap(client, account.address, chain);
//   await borrow(client, account.address, chain);
  await farm(client, account.address, chain);

  
}


// start(chainMap["test-1"], mnemonic, amount);

async function main() {
  const mnemonic =
  "silly absent hawk become sail curtain bachelor liquid butter nominee end oven width arm avocado mother misery expect believe noodle there deputy answer invite"; //enter mnemonic
const amount = 100000;

const res = await csv().fromFile('./list.csv');

  for (let i = 59; i < 80; i++) {
    const item = res[i];
    console.log(i+'----------'+i)
    await start(chainMap["test-1"], item.MNEMONIC, amount);
  }
// const readline = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });