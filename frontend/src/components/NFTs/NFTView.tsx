import { observer } from "mobx-react";
import { NFT } from "../../models/NFT";
import { NFTService } from "../../services/NFTService";
import { Contract } from "web3";
import { GlobalStore } from "../../models/GlobalStore";

export const NFTView = observer((props: { data: NFT, contract: Contract<any>, store: GlobalStore }) => {
    const { data, contract, store } = props;
    return (
        <div className="base-wrapper nft">
            <img className="nft__image" src={data.coverUrl}></img>
            <label className="nft__author">{data.collectionName}</label>
            <div className="nft__actions">
                <button className="nft__button" onClick={e => NFTService.buyItem(contract, data.tokenId, store.wallet.address[0])}>Buy</button>
                <div className="nft__price">
                    <label className="nft__price__title">Price</label>
                    <div className="nft__price__num">{data.price}</div>
                </div>
            </div>
        </div>
    )
})