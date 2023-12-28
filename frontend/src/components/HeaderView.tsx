import "../styles/header.less";
import { observer } from "mobx-react";
import { GlobalStore } from "../models/GlobalStore";
import { WalletView } from "./WalletView";

export const HeaderView = observer((props: { store: GlobalStore }) => {
    return (
        <div className="header">
            <div className="header__title">
                <img width="50px" height="50px" src={require('../images/wallet.png')} />
                <div className="header__title__text">
                    Wallet
                </div>
            </div>
            <WalletView store={props.store} />
        </div>
    )
})