import { useEffect, useState } from "react"
import { FilterView } from "./FilterView"
import { NFTView } from "./NFTView"
import "../../styles/nfts.less"
import { observer } from "mobx-react"
import { GlobalStore } from "../../models/GlobalStore"
import { NFTService } from "../../services/NFTservice"

export const NFTsView = observer((props: { store: GlobalStore }) => {
    const { store } = props;
    const { NFTs } = store;

    useEffect(() => {
        const data = NFTService.getNFTs({ projectCertificated: true, priceRangeCurrency: "ETH", pageNum: 1, pageSize: 30 }).then(data => {
            NFTs.setList(data)
        })
    }, [])


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