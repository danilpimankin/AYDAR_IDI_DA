import { Contract } from "web3";
import { IGetNFTsRequest, NFTsDTO } from "../interfaces/requestInterface";
import { NFT } from "../models/NFT";
import { contractABI } from "../utils/contractABI";
import toast from "react-hot-toast";

export class NFTService {

    static buyItem(contract: Contract<typeof contractABI>, tokenId: string, from: string) {
        const a = (contract.methods as any);
        const b = a.buyItem(tokenId);
        const c = b.send({from: from}).then(() => {
            toast.success("Token successfully send!");
        })
        .catch(() => {
            toast.error("Something went wrong");
        });
    }

    static getDefaultRequest(): IGetNFTsRequest {
        return {
            "size": 30,
            "filter":
            {
                "verifiedOnly": true,
                "sort": "TRENDING",
                "currency": "NATIVE",
                "blockchains": ["ETHERIUM"],
                "priceBlockchain": "ETHEREUM",
            }
        }
    }
    // NOTE:: currently not working
    static getNFTs(request: IGetNFTsRequest): Promise<NFT[]> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://rarible.com/marketplace/api/v4/items/search')
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader("vary", "Access-Control-Request-Method");
            xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
            xhr.onreadystatechange = () => {
                if (xhr.status == 200 && xhr.responseText.endsWith('}')) {
                    resolve(this.parseData(JSON.parse(xhr.responseText) as NFTsDTO[]));
                }
            }
            xhr.send(JSON.stringify(request));
        })
    }

    private static parseData(dto: NFTsDTO[]): NFT[] {
        return dto.map(data => new NFT(data));
        // return dto.data.list.map(val => new NFT(val))
    }
}