import { IGetNFTsRequest, NFTsDTO } from "../interfaces/requestInterface";
import { NFT } from "../models/NFT";

export class NFTService {

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
    // static getNFTs(request: IGetNFTsRequest): Promise<NFT[]> {
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         debugger;
    //         xhr.open("POST", 'https://rarible.com/marketplace/api/v4/items/search')
    //         xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //         xhr.onreadystatechange = () => {
    //             if (xhr.status == 200 && xhr.responseText.endsWith('}')) {
    //                 resolve(this.parseData(JSON.parse(xhr.responseText) as NFTsDTO[]));
    //             }
    //         }
    //         xhr.send(JSON.stringify(request));
    //     })
    // }

    // private static parseData(dto: NFTsDTO): NFT[] {
    //     return dto.data.list.map(val => new NFT(val))
    // }
}