import settings from "./settings.json";
import Web3 from "web3";
import { ethers } from "ethers";

const address = "0x8BcA267811bd218427e67067A3ccB26BFE8550d0"; // Smart contract address

export const web3 = new Web3(window.ethereum);

if (window.ethereum) window.ethereum.autoRefreshOnNetworkChange = false;

const contract = new web3.eth.Contract(settings.abi as any, address);

export const provider = new ethers.providers.Web3Provider(window.ethereum);

export default contract;
