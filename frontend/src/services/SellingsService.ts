import { Contract } from "web3";
import { contractABI } from "../utils/contractABI";
import toast from "react-hot-toast";

export class SellingService {
    static sendSelling(contract: Contract<typeof contractABI>, address: string, token: number, from: string) {
        const a = (contract.methods as any)
        const b = a.listItem(token, 10, address)
        const c = b.send({from: from}).then(() => {
            toast.success("Token successfully send!");
        })
        .catch(() => {
            toast.error("Something went wrong");
        });
    }
}