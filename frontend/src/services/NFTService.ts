import { IGetNFTsRequest, NFTsDTO } from "../interfaces/requestInterface";
import { NFT } from "../models/NFT";

export class NFTService {

    static getNFTs(request: IGetNFTsRequest): Promise<NFT[]> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            debugger;
            xhr.open("POST", 'https://www.okx.com/priapi/v1/nft/secondary/market?t=1703603399099')
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = () => {
                if (xhr.status == 200 && xhr.responseText.endsWith('}')) {
                    resolve(this.parseData(JSON.parse(xhr.responseText) as NFTsDTO));
                }
            }
            xhr.send(JSON.stringify(request));
        })
    }

    private static parseData(dto: NFTsDTO): NFT[] {
        return dto.data.list.map(val => new NFT(val))
    }
}