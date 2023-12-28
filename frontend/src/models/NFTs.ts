import { action, makeObservable, observable } from "mobx";
import { NFT } from "./NFT";

export class NFTs {
    min: string = "";
    max: string = "";
    list: NFT[] = [];
    constructor() {
        makeObservable(this, {
            list: observable,
            min: observable,
            max: observable,
            setMin: action,
            setMax: action,
            setList: action,
        });
    }

    setMin(value: string): void {
        throw new Error("Method not implemented.");
    }
    setMax(value: string): void {
        throw new Error("Method not implemented.");
    }
    setList(value: NFT[]) {
        this.list = value;
    }
}