import { useEffect, useState } from "react"
import { Filter } from "./Filter"
import { NFT } from "./NFT"
import "../../styles/nfts.less"
import { Utilities } from "../../utils/Utilities"

export const NFTs = () => {
    const [Nfts, setNfts] = useState([])

    useEffect(() => {
        const data = Utilities.getNFTs({ projectCertificated: true, priceRangeCurrency: "ETH", pageNum: 1, pageSize: 30 }).then(data => {
            setNfts(data.data.list.filter(val => val.coverUrl))
        })
    }, [])


    return (
        <div className="base-wrapper nfts">
            <h1>NFTs</h1>
            <Filter />
            <div className="nft-list">
                {Nfts.map(item => {
                    return <NFT data={item} />
                })}
            </div>
        </div>
    )
}