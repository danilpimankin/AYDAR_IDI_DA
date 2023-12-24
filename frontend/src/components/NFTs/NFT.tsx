import { NFTDTO } from "../../interfaces/requestInterface"

interface NFTProps {
    data: NFTDTO    
}

export const NFT: React.FC<NFTProps> = (nftProp: NFTProps) => {
    const data = nftProp.data;
    return (
        <div className="base-wrapper nft">
            <img className="nft__image" src={data.coverUrl}></img>
            <label className="nft__author">author</label>
            <div className="nft__title">title</div>
            <div className="nft__actions">
                <button className="nft__button">Buy</button>
                <div className="nft__price">
                    <label className="nft__price__title">Price</label>
                    <div className="nft__price__num">numbers</div>
                </div>
            </div>
        </div>
    )
}