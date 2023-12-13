import React from 'react';
import { createRoot } from "react-dom/client";
import "./styles/index.less";

const HelloWorld = () => {
    return (
        <h3>Hello World</h3>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<HelloWorld />);