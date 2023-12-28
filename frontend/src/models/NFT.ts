import { NFTsDTO } from "../interfaces/requestInterface";

export class NFT {

    collectionName: string;
    contractAddress: string;
    coverUrl: string;
    name: string;
    tokenId: string;
    ownerAddress: string;
    price: number;
    constructor(data: NFTsDTO) {
        this.contractAddress = data.token
        this.coverUrl = data.properties.mediaEntries[0].url;
        this.name = data.properties.name;
        this.tokenId = data.tokenId;
        this.ownerAddress = data.creator;
        this.price = data.ownership.priceETH;
    }
}