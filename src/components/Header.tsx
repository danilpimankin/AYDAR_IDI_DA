import image from "../images/wallet.png";
import { Wallet } from "./Wallet";

export const Header = () => {
    console.log(image)
    return (
        <div className="header">
            <div>
                <img src={image} />
                Wallet
            </div>
            <Wallet/>
        </div>
    )
}