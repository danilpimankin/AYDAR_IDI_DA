import { makeObservable, observable } from "mobx";
import { NFT } from "./NFT";

export class NFTs {
    list: NFT[];
    constructor() {
        makeObservable({
            list: observable,
        });

        this.list = [];
    }

    setList(value: NFT[]) {
        this.list = value;
    }
}