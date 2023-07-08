import { ethers } from "ethers";

export const useContractStore = defineStore("contractStore", () => {
  const ABI = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "txId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "txId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "Approve",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "Owners",
          type: "address[]",
        },
        {
          internalType: "uint8",
          name: "Approvers",
          type: "uint8",
        },
      ],
      name: "create",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "txId",
          type: "uint256",
        },
      ],
      name: "execute",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "txId",
          type: "uint256",
        },
      ],
      name: "Execute",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "txId",
          type: "uint256",
        },
      ],
      name: "revoke",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "txId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "Revoke",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "submit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "txId",
          type: "uint256",
        },
      ],
      name: "Submit",
      type: "event",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "approved",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "approvers",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "isOwner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "owners",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "transactions",
      outputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "bool",
          name: "executed",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const CONTRACT_ADDRESS = "0xfa0f6D345763DD5d9fCA846cd55d3C97006f7E92";

  const address = ref("");
  const balance = ref("");
  const contract = ref(null);

  async function connect() {
    if (window.ethereum) {
      // MetaMask requires requesting permission to connect users accounts
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const accounts = await provider.send("eth_requestAccounts", []);
      address.value = accounts[0];

      let res = await provider.getBalance(accounts[0]);
      balance.value = ethers.utils.formatEther(res);

      const signer = provider.getSigner(address.value);

      // //In case of RPC provider like Alchemy:
      // // Second parameter is chainId, 1 for Ethereum mainnet
      // const provider = new ethers.providers.JsonRpcProvider("API_URL", 1);
      // const signer = new ethers.Wallet("WALLET_PRIVATE_KEY", provider);
      contract.value = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

      // balanceController.set(accounts[0], 1).then((result, err) => {
      //     console.log(result, err);
      // });
      // balanceController.get(accounts[0]).then((res, err) => {
      //     console.log(ethers.utils,ethers.utils.formatUnits(res, 'wei'), err);
      // });
      if (address.value) navigateTo("/dashboard");
    }
  }

  return { address, balance, connect };
});
