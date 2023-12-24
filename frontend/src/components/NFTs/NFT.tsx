export const NFT = () => {
    return (
        <div className="base-wrapper nft">
            <div className="nft__image"></div>
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