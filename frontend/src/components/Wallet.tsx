import { IWalletProps } from "./Header";

export const Wallet: React.FC<IWalletProps> = (setWallet: IWalletProps) => {
    const doShit = async () => {
        if (window.ethereum) {
            try {
                const addressArray = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWallet.setWallet(addressArray)
            } catch (err) {
                setWallet.setWallet("");
            }
        }
    }
    return (
        <div className="header__wallet" onClick={doShit}>
            <img src={require("../images/MetaMask.png")} />
            Connect Wallet
        </div>
    )
}