import image from "../images/wallet.png";
import { Wallet } from "./Wallet";

export const Header = () => {
    console.log(image)
    return (
        <div className="header">
            <div>
                <img src={image} />
                path to image is {image}<br/>
                Wallet
            </div>
            <Wallet/>
        </div>
    )
}