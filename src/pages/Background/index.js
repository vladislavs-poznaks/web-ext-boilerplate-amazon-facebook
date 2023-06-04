console.log('This is the background page. 1.020');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    if (message !== "callFacebookAPI") {
        return "wrong call";
    }

    chrome.storage.local.get(["productName","latitude","longitude"]).then((result) => {
        const product = result.productName;
        const latitude = result.latitude;
        const longitude = result.longitude;

        let url = "http://ec2-16-170-232-234.eu-north-1.compute.amazonaws.com/?product="+product;
        if(latitude && longitude) {
            url +=  "&latitude="+latitude+"&longitude="+longitude;
        }
        // const radius = req.query.radius || 50;

        fetch(url, {
            method: "GET",
            mode: "cors",
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success response from facebook API. DATA: ", data);
                chrome.storage.local.set({"responseFacebookAPI": data}).then((result) => {
                    console.log("Facebook call response values were set Success");
                });
            })
            .catch(error => {
                console.log("Response from facebook API Fail:", error)
                chrome.storage.local.set({"responseFacebookAPI": error}).then((result) => {
                    console.log("Facebook call response values were set Catch");
                    // chrome.runtime.sendMessage('responseFacebookAPI', (response) => {
                    //     3. Got an asynchronous response with the data from the service worker
                    // console.log('completed responseFacebookAPI message', response);
                    // });
                });
            });

        console.log("End of background task");
    });
});