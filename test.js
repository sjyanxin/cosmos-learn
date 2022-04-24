import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";

window.keplr.defaultOptions = {
  sign: {
    preferNoSetMemo: true,
    preferNoSetFee: true,
    disableBalanceCheck: true,
  },
};

const offlineSigner = window.getOfflineSignerOnlyAmino(
      process.env.REACT_APP_CHAIN_ID
);

const typeUrl =
      "/custom.MsgCustom";

const customRegistry = new Registry(defaultRegistryTypes);
customRegistry.register(
  typeUrl,
  MsgCustom as GeneratedType
);

const customAminoTypes = new AminoTypes({
  prefix: "custom?", // not sure if this has to be "cosmos" or the custom prefix of our bech32addresses
  additions: {
    "/custom.MsgCustom": {
      aminoType: "custom/MsgCustom",
      toAmino: ({
        initiator,
        toAddress,
        coins,
      }) => {
        return {
          initiator,
          to_address: toAddress,
          coins: [...coins],
        };
      },
      fromAmino: ({
        initiator,
        to_address,
        coins,
      }) => {
        return {
          initiator,
          toAddress: to_address,
          coins: [...coins],
        };
      },
    },
  },
});

const signingClient = await SigningStargateClient.offline(
  offlineSigner,
  { registry: customRegistry, aminoTypes: customAminoTypes, prefix: "custom?" } // not sure if this has to be "cosmos" or the custom prefix of our bech32addresses
);

await window.keplr.enable(process.env.REACT_APP_CHAIN_ID);
const walletAccount = await window.keplr.getKey(
  process.env.REACT_APP_CHAIN_ID
);

const message = {
  initiator: "custom1z2all86gvvkluus6c3sv6el9725wk7lfr9yaqy", // Address of the multisig itself
  toAddress: "custom1eh3tdj03xmc6re77tyrdqktsx05tacp26vawlp",
  coins: [
    {
      denom: config.denom,
      amount: "10000000000000000000",
    },
  ],
};

const messages = [
  {
    typeUrl,
    value: message,
  },
];

const msgFee = {
  amount: [
    {
      denom: config.denom,
      amount: "180000",
    },
  ],
  gas: "200000",
};

const msgMemo = "Custom Transaction";

const signerData = {
  accountNumber,
  sequence,
  chainId
};

const { signatures, bodyBytes } = await signingClient.sign(
  walletAccount.bech32Address,
  messages,
  msgFee,
  msgMemo,
  signerData
);