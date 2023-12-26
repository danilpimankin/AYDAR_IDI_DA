import { action, makeObservable, observable } from "mobx";

export class Wallet {

    address: string[];

    constructor() {
        makeObservable({
            address: observable,
            setWallet: action
        })
        this.address = [];
    }

    setWallet = (value: string[]) => {
        this.address = value
        console.log(value)
    }
}