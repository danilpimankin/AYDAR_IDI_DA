import { observer } from "mobx-react"
import "../../styles/selling.less"
import { GlobalStore } from "../../models/GlobalStore"

export const SellingView = observer((props: { store: GlobalStore }) => {
    const { store } = props;
    const { selling, wallet } = store;
    return (
        <div className="base-wrapper selling">
            <h1>
                Selling
            </h1>
            <div className="selling__inputs">
                <input className="base-input selling__input" placeholder="Enter attribute" value={selling.tokenId} onChange={e => selling.changeToken(e.currentTarget.value)}></input>
                <input className="base-input selling__input" placeholder="Enter contact address" value={selling.address} onChange={e => selling.changeAddress(e.currentTarget.value)}></input>
                <button className="selling__button" onClick={() => selling.sendSelling(wallet.address[0])}>Open</button>
            </div>
        </div>
    )
})