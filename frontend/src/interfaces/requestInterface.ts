export type IGetNFTsRequest = {
    "size": number,
    "filter":
    {
        "verifiedOnly": boolean,
        "sort": string,
        "currency": string,
        "blockchains": string[],
        "hideItemsSupply"?: string,
        "orderSources"?: [],
        "minPrice"?: number,
        "maxPrice"?: number,
        "hasMetaContentOnly"?: boolean,
        "priceBlockchain": string,
    }
}

export type NFTsDTO = {
    blockchain: string,
    creator: string,
    creators: {address: string, value: number}[],
    id: string,
    token: string,
    tokenId: string,
}

export type NFTsDataDTO = {
    cursor: string,
    list: NFTDTO[],
    total: number,
}

export type NFTDTO = {
    collectionName: string,
    contractAddress: string,
    coverUrl: string,
    name: string,
    projectName: string,
    tokenId: string,
    ownerAddress: string,
}