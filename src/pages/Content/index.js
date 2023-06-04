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
    chrome.runtime.sendMessage('callFacebookAPI', (response) => {
        // 3. Got an asynchronous response with the data from the service worker
        console.log('received facebook api response', response);
    });

    const center = document.getElementById("centerCol");
    const hr = center?.querySelector("hr");

    if (!hr) {
        return
    }

    const extensionContainer = document.createElement("div");

    extensionContainer.id = "amazon-fb-market-extension";

    hr.insertAdjacentElement("afterend", extensionContainer);

    const props = {
        product: getProductName()
    }

    const root = createRoot(extensionContainer);
    root.render(<Content {...props} />);
}

createContainer();