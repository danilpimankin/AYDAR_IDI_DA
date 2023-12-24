import { Filter } from "./Filter"
import { NFT } from "./NFT"
import "../../styles/nfts.less"

export const NFTs = () => {
    return (
        <div className="base-wrapper nfts">
            <h1>NFTs</h1>
            <Filter />
            <div className="nft-list">
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
                <NFT />
            </div>
        </div>
    )
}