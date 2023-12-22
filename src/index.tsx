import React from 'react';
import { createRoot } from "react-dom/client";
import "./styles/index.less";
import { Header } from './components/Header';

const HelloWorld = () => {
    return (
        <Header/>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<HelloWorld />);