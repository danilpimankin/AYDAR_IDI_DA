import { makeObservable, observable } from "mobx";
import { NFT } from "./NFT";

export class NFTs {
    list: NFT[] = [];
    constructor() {
        makeObservable(this, {
            list: observable,
        });
    }

    setList(value: NFT[]) {
        this.list = value;
    }
}