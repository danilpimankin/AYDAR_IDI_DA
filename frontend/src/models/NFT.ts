import { NFTDTO } from "../interfaces/requestInterface";

export class NFT {

    collectionName: string;
    contractAddress: string;
    coverUrl: string;
    name: string;
    projectName: string;
    tokenId: string;
    ownerAddress: string;
    constructor(data: NFTDTO) {
        this.collectionName = data.collectionName
        this.contractAddress = data.contractAddress
        this.coverUrl = data.coverUrl
        this.name = data.name
        this.projectName = data.projectName
        this.tokenId = data.tokenId
        this.ownerAddress = data.ownerAddress
    }
}