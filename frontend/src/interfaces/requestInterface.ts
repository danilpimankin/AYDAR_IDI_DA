export type IGetNFTsRequest = {
    address?: string[],
    chainin?: string[],
    projectCertificated: boolean,
    priceRangeCurrency: string,
    priceRangeMax?: number,
    priceRangeMin?: number,
    cursor?: string,
    pageNum: number,
    pageSize: number,
}

export type NFTsDTO = {
    code: number,
    data: NFTsDataDTO,
    detailMsg: string,
    error_code: string,
    error_message: string,
    msg: string,
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