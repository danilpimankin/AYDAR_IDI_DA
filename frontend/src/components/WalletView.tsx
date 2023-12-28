import { observer } from "mobx-react";
import { GlobalStore } from "../models/GlobalStore";
import toast from "react-hot-toast";


export const WalletView = observer((props: { store: GlobalStore }) => {
    const { store } = props;
    const { wallet } = store;
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const addressArray = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                toast.success("Succeccfully connected!")
                wallet.setWallet(addressArray)
            } catch (err) {
                
                toast.success("Something went wrong");
                wallet.setWallet([]);
            }
        }
    }
    return (
        <div className="header__wallet" onClick={connectWallet}>
            <img src={require("../images/MetaMask.png")} />
            Connect Wallet
        </div>
    )
})