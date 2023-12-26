import { observer } from "mobx-react";
import { NFT } from "../../models/NFT";

export const NFTView = observer((props: { data: NFT }) => {
    const data = props.data;
    return (
        <div className="base-wrapper nft">
            <img className="nft__image" src={data.coverUrl}></img>
            <label className="nft__author">{data.collectionName}</label>
            <div className="nft__title">{data.projectName}</div>
            <div className="nft__actions">
                <button className="nft__button">Buy</button>
                <div className="nft__price">
                    <label className="nft__price__title">Price</label>
                    <div className="nft__price__num"></div>
                </div>
            </div>
        </div>
    )
})