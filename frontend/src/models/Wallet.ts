import { action, makeObservable, observable } from "mobx";

export class Wallet {

    address: string[] = [];
    constructor() {
        makeObservable(this, {
            address: observable,
            setWallet: action
        })
    }

    setWallet = (value: string[]) => {
        this.address = value
        console.log(value)
    }
}