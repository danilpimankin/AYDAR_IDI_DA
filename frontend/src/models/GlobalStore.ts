import { makeObservable, observable } from "mobx";
import { Wallet } from "./Wallet";
import { Selling } from "./Selling";
import { NFTs } from "./NFTs";

export class GlobalStore {
    wallet: Wallet;
    selling: Selling;
    NFTs: NFTs;
    constructor() {
        makeObservable({
            wallet: observable,
            selling: observable,
            NFTs: observable,
        })
        this.wallet = new Wallet();
        this.selling = new Selling();
        this.NFTs = new NFTs();
    }
}