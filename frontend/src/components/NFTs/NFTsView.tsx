import { useEffect, useState } from "react"
import { FilterView } from "./FilterView"
import { NFTView } from "./NFTView"
import "../../styles/nfts.less"
import { observer } from "mobx-react"
import { GlobalStore } from "../../models/GlobalStore"
import { NFTService } from "../../services/NFTService"

export const NFTsView = observer((props: { store: GlobalStore }) => {
    const { store } = props;
    const { NFTs } = store;

    // NOTE:: not working
    // useEffect(() => {
    //     const data = NFTService.getNFTs(NFTService.getDefaultRequest()).then(data => {
    //         NFTs.setList(data)
    //     })
    // }, [])


    return (
        <div className="base-wrapper nfts">
            <h1>NFTs</h1>
            <FilterView />
            <div className="nft-list">
                {NFTs.list.map(item => {
                    return <NFTView data={item} />
                })}
            </div>
        </div>
    )
})