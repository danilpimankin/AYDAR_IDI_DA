import { action, computed, makeObservable, observable } from "mobx";
import { SellingService } from "../services/SellingsService";
import { Contract } from "web3";
import { contractABI } from "../utils/contractABI";

export class Selling {
    _tokenId: string = "";
    _address: string = "";
    contract: Contract<typeof contractABI>
    get tokenId() {
        return this._tokenId
    }
    get address() {
        return this._address
    }
    constructor(contract: Contract<typeof contractABI>) {
        makeObservable(this, {
            _tokenId: observable,
            _address: observable,
            tokenId: computed,
            address: computed,
            changeToken: action,
            changeAddress: action,
            sendSelling: action.bound,
        })
        this._tokenId = "";
        this._address = "";
        this.contract = contract;
    }

    changeToken(val: string) {
        this._tokenId = val;
        console.log(this.tokenId)
    }
    changeAddress(val: string) {
        this._address = val;
        console.log(this.address);
    }

    sendSelling(from: string) {
        const tokenNum = +this.tokenId
        if (!isNaN(tokenNum) && this.address != "") {
            SellingService.sendSelling(this.contract, this.address, tokenNum, from)
        }
        else
            console.error("tokenID:: in not a number");
    }
}