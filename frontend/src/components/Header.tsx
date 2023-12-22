import { Wallet } from "./Wallet";

export const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={require('../images/wallet.png')} />
                Wallet
            </div>
            <Wallet/>
        </div>
    )
}