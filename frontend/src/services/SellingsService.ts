import { Contract } from "web3";
import { contractABI } from "../utils/contractABI";

export class SellingService {
    static sendSelling(contract: Contract<typeof contractABI>, address: string, token: number, from: string) {
        debugger;
        
        console.log(address, token, from)
        const a = (contract.methods as any) // тоже заглушщка
        const b = a.listItem(token, 10, address)
        const c = b.send({from: from}).then(console.log).catch(console.log);
    }
}