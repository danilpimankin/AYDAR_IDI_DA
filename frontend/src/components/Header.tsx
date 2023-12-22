import { Wallet } from "./Wallet";
import "../styles/header.less";

export const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <img width="50px" height="50px" src={require('../images/wallet.png')} />
                <div className="header__title__text">
                    Wallet
                </div>
            </div>
            <Wallet />
        </div>
    )
}