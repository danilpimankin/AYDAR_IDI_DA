import { observer } from "mobx-react"
import { GlobalStore } from "../../models/GlobalStore"
import { NFTService } from "../../services/NFTService";

export const FilterView = observer((props: { store: GlobalStore }) => {
    const { store } = props;
    const { NFTs } = store;

    const getFilteredNFTs = () => {

        const request = NFTService.getDefaultRequest();
        if (NFTs.min && !isNaN(+NFTs.min)) {
            request.filter.minPrice = +NFTs.min;
        }
        if (NFTs.max && !isNaN(+NFTs.max)) {
            request.filter.maxPrice = +NFTs.max;
        }
        NFTService.getNFTs(request).then(data => {
            NFTs.setList(data);
        })
    }

    return (
        <div className="base-wrapper filter">
            <h3 className="filter__title">Price</h3>
            <div className="filter__wrapper">
                <div className="filter__inputs">
                    <input className="base-input filter__input" placeholder="Min" value={NFTs.min} onChange={e => NFTs.setMin(e.currentTarget.value)}></input>
                    <label className="filter__label">to</label>
                    <input className="base-input filter__input" placeholder="Max" value={NFTs.max} onChange={e => NFTs.setMax(e.currentTarget.value)}></input>
                </div>
                <button className="filter__apply" onClick={getFilteredNFTs}>Apply</button>
            </div>
        </div>
    )
})