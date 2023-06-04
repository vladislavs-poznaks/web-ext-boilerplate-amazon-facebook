console.log('This is the background page. 1.021');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    if (message !== "callFacebookAPI") {
        return "wrong call";
    }

    chrome.storage.local.get(["productName","latitude","longitude"]).then((result) => {
        let product = result.productName.trim();
        const latitude = result.latitude;
        const longitude = result.longitude;

        if (product.length > 10) {
            product = product.substring(0, 10).concat('...')
        }

        let url = "http://ec2-16-170-232-234.eu-north-1.compute.amazonaws.com/?product="+encodeURIComponent(product);
        if(latitude && longitude) {
            url +=  "&latitude="+encodeURIComponent(latitude)+"&longitude="+encodeURIComponent(longitude);
        }
        console.log("URL", url)
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