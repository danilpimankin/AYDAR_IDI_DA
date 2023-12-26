import { observer } from "mobx-react";
import { GlobalStore } from "../models/GlobalStore";

export const WalletView = observer((props: { store: GlobalStore }) => {
    const { store } = props;
    const { wallet } = store;
    const doShit = async () => {
        if (window.ethereum) {
            try {
                const addressArray = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                wallet.setWallet(addressArray)
                wallet.address
            } catch (err) {
                wallet.setWallet([]);
            }
        }
    }
    return (
        <div className="header__wallet" onClick={doShit}>
            <img src={require("../images/MetaMask.png")} />
            Connect Wallet
        </div>
    )
})