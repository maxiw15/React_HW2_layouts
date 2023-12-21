import React, {useState} from 'react';
import Data from "../Data";
import IconSwitch from "./IconSwitch.jsx";
import CardsView from "./CardView.jsx";
import ListView from "./ListView.jsx";

const Store = () => {
    const [layout, setLayout] = useState("cards")
    const [iconName, setIconName] = useState("view_list")
    const switchLayout = () => {
        if (layout === "cards") {
            setLayout("list")
            setIconName("view_module")
        }
        else if (layout === "list") {
            setLayout("cards")
            setIconName("view_list")
        }
    }
    return (
        <div>
            <IconSwitch icon={iconName} onSwitch={switchLayout}/>
            {layout === "cards" ? <CardsView cards={Data} /> : <ListView items={Data} />}
        </div>
    );
};

export default Store;
