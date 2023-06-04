console.log('This is the background page. 1.005');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    if (message !== "callFacebookAPI") {
        return "wrong call";
    }

    chrome.storage.local.get(["productName"]).then((result) => {
        console.log("Value currently is " + result.productName);
    });

    fetch("https://www.facebook.com/api/graphql", {
        method: "POST",
        mode: "cors",
    })
        .then(response => {
            console.log("Response from Auth Success:", response)

            chrome.storage.local.set({"facebook_call_response": response}).then((result) => {
                console.log("Facebook call response values were set Success");
                // chrome.runtime.sendMessage('responseFacebookAPI', (response) => {
                //     // 3. Got an asynchronous response with the data from the service worker
                //     console.log('completed responseFacebookAPI message', response);
                // });
            });
        })
        // .then(data => {
        //     console.log("Response data: ", data);
        //     chrome.storage.local.set({"facebook_call_response": data}).then((result) => {
        //         console.log("Facebook call response values were set");
        //         chrome.runtime.sendMessage('responseFacebookAPI', (response) => {
        //             // 3. Got an asynchronous response with the data from the service worker
        //             console.log('completed responseFacebookAPI message', response);
        //         });
        //     });
        // })
        .catch(error => {
            console.log("Response from AUTH Fail:", error)
            chrome.storage.local.set({"facebook_call_response": error}).then((result) => {
                console.log("Facebook call response values were set Catch");
                // chrome.runtime.sendMessage('responseFacebookAPI', (response) => {
                //     3. Got an asynchronous response with the data from the service worker
                    // console.log('completed responseFacebookAPI message', response);
                // });
            });
        });

    console.log("End of background task");
});