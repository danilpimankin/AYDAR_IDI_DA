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

export type OwnershipDTO = {
    id: string,
    owner: string,
    priceETH: number,
}

export type MediaEntryDTO = {
    url: string,
    sizeType: string,
    contentType: string,
    sourceMimeType: string
}

export type PropertiesDTO = {
    name: string,
    mediaEntries: MediaEntryDTO[]
}

export type NFTsDTO = {
    blockchain: string,
    creator: string,
    id: string,
    ownership: OwnershipDTO,
    token: string,
    tokenId: string,
    properties: PropertiesDTO
}