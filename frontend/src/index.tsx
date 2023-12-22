import React from 'react';
import { createRoot } from "react-dom/client";
import "./styles/index.less";
import { Header } from './components/Header';
import { Selling } from './components/Selling/Selling';
import { NFTs } from './components/NFTs/NFTs';

const HelloWorld = () => {
    return (
        <div className={"base"}>
            <Header />
            <Selling />
            <NFTs />
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<HelloWorld />);