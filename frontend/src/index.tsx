import React, { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
import "./styles/index.less";
import { HeaderView } from './components/HeaderView';
import { SellingView } from './components/Selling/SellingView';
import { NFTsView } from './components/NFTs/NFTsView';
import { GlobalStore } from './models/GlobalStore';
import { observer } from 'mobx-react';

declare global {
    interface Window { ethereum: any }
}


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