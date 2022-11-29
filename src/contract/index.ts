import settings from "./settings.json";
import Web3 from "web3";
import { ethers } from "ethers";

const address = "0x50B6714BBC1408D1Ca179eD66a921C19008112C3";

export const web3 = new Web3(window.ethereum);

if (window.ethereum) window.ethereum.autoRefreshOnNetworkChange = false;

const contract = new web3.eth.Contract(settings.abi as any, address);

export const provider = new ethers.providers.Web3Provider(window.ethereum);

export default contract;
