import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import "./styles/index.less";
import { Header } from './components/Header';
import { Selling } from './components/Selling/Selling';
import { NFTs } from './components/NFTs/NFTs';
import Web3 from 'web3';
import { contractABI } from './utils/contractABI';

declare global {
    interface Window { ethereum: any }
}

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8080/'))

const contractAddress = "0x5C5a283b3C31eD746ff32b5A5C065690F5E3437b";

const contract = new web3.eth.Contract(contractABI, contractAddress);

const HelloWorld = () => {
    const [wallet, setWallet] = useState("");
    return (
        <div className={"base"}>
            <Header setWallet={setWallet}/>
            <Selling />
            <NFTs />
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<HelloWorld />);