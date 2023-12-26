import React, { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
import "./styles/index.less";
import { HeaderView } from './components/HeaderView';
import { SellingView } from './components/Selling/SellingView';
import { NFTsView } from './components/NFTs/NFTsView';
import Web3 from 'web3';
import { contractABI } from './utils/contractABI';
import { GlobalStore } from './models/GlobalStore';
import { observer } from 'mobx-react';

declare global {
    interface Window { ethereum: any }
}

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8080/'))

const contractAddress = "0x5C5a283b3C31eD746ff32b5A5C065690F5E3437b";

const contract = new web3.eth.Contract(contractABI, contractAddress);

const HelloWorld = observer(() => {

    const [store, setStore] = useState<GlobalStore | null>(null);

    useEffect(() => {
        setStore(new GlobalStore());
    }, [])

    return (
        <div className={"base"}>
            {
                store != null &&
                <>
                    <HeaderView store={store} />
                    <SellingView store={store}/>
                    <NFTsView store={store}/>
                </>
            }
        </div>
    );
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<HelloWorld />);