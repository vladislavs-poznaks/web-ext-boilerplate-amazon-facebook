import Content from "./components/Content";
import React from 'react';
import {createRoot} from "react-dom/client";

const getProductName = () => {
    const element = document.querySelector("#productTitle");

    if (element) {
        return element.textContent
    }

    return ""
}

const createContainer = () => {
    const center = document.getElementById("centerCol");
    const hr = center?.querySelector("hr");

    if (!hr) {
        return
    }

    const extensionContainer = document.createElement("div");

    extensionContainer.id = "amazon-fb-market-extension";

    center.insertBefore(extensionContainer, hr);

    const props = {
        product: getProductName()
    }

    const root = createRoot(extensionContainer);
    root.render(<Content {...props} />);
}

createContainer();