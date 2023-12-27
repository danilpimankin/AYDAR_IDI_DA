import { makeObservable, observable } from "mobx";
import { Wallet } from "./Wallet";
import { Selling } from "./Selling";
import { NFTs } from "./NFTs";
import Web3, { Contract } from "web3";
import { contractABI } from "../utils/contractABI";

export class GlobalStore {
    wallet: Wallet = new Wallet();
    selling: Selling = null;
    NFTs: NFTs = new NFTs();
    contract: Contract<typeof contractABI>;
    constructor() {
        makeObservable(this, {
            wallet: observable,
            selling: observable,
            NFTs: observable,
        })

        const web3 = new Web3(window.ethereum)


        const contractAddress = "0xE4399b008861FC92A4c39A24bD31bC2E7e851D0E";

        this.contract = new web3.eth.Contract(contractABI, contractAddress);
        this.selling = new Selling(this.contract);
    }
}