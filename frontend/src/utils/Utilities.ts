import { IGetNFTsRequest, NFTsDTO } from "../interfaces/requestInterface";

export class Utilities {

    static getNFTs(request: IGetNFTsRequest): Promise<NFTsDTO> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://www.okx.com/priapi/v1/nft/secondary/market')
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = () => {
                if (xhr.status == 200 && xhr.responseText.endsWith('}')) {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
            xhr.send(JSON.stringify(request));
        })
    }
}