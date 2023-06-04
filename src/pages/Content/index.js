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
    console.log("Calling facebook API call");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                chrome.storage.local.set({
                    latitude: latitude,
                    longitude: longitude
                })
            },
            (error) => {
                console.error(error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
    chrome.storage.local.set({
        productName: getProductName()
    }).then(() => {
        console.log("Facebook call values were set with session storage");

        chrome.runtime.sendMessage('callFacebookAPI', (response) => {
            // 3. Got an asynchronous response with the data from the service worker
            console.log('completed callFacebookAPI message', response);
        });

        tryToDrawFacebookAPIObjects(0);
    });
}

createContainer();

function tryToDrawFacebookAPIObjects(counter){
    if(counter < 10){
        setTimeout(function(){
            console.log("Processing facebook API response");

            chrome.storage.local.get(["responseFacebookAPI"]).then((result) => {
                if (result.responseFacebookAPI) {
                    console.log("Content:",result.responseFacebookAPI)

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

                    chrome.storage.local.set({"responseFacebookAPI": false});
                } else {
                    counter++;
                    console.log(counter);
                    tryToDrawFacebookAPIObjects(counter);
                }


            });

        }, 1000);
    }
}