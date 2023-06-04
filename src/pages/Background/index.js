console.log('This is the background page. 1.005');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    if (message !== "callFacebookAPI") {
        return "wrong call";
    }

    chrome.storage.local.get(["productName"]).then((result) => {
        console.log("Value currently is " + result.productName);
    });

    const product = 'Playstation 5';
    const latitude = '50';
    const longitude = '20';
    // const radius = req.query.radius || 50;

    fetch("https://www.facebook.com/api/graphql", {
        method: "POST",
        mode: "cors",
        body: `av=0&__user=0&__a=1&__dyn=7xeUmBwjbgmwCwRyWzEsheC1swgE98nwgU6C4UKewSAAwCxW4E2czobohxi2i3qcw9m7oqx61BwvU2Vwb-q3q5Voy6o2xwbG783pwKx-8wlU-cBweq0wXAy85iaxq3m7Eaoy15wJwBgK4oK227Ua831wLwKwFxe0H8-7Eox21uwjojxm&__csr=&__req=l&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=2&__rev=1001662448&__s=aw8z00%3Asobw97%3Az0y5t9&__hsi=6788100950301358546-0&lsd=AVqtNhkO&jazoest=2748&__spin_r=1001662448&__spin_b=trunk&__spin_t=1580477913&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=MarketplaceNewSearchFeedPaginationQuery&variables=%7B%22count%22%3A16%2C%22cursor%22%3A%22%7B%5C%22pg%5C%22%3A0%2C%5C%22b2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22%5C%22%2C%5C%22it%5C%22%3A0%2C%5C%22hmsr%5C%22%3Afalse%2C%5C%22tbi%5C%22%3A0%7D%2C%5C%22c2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22AboZViCziur4EpVnWRWwdavBcJPPWqTrfg8iD56vK04vkKWAiDcN8b1XuNuthTcfJNzbH1Y3KMGJjO6LO2JBJaVKm3FHtbYsXLh3ch8Q2JY36VQTJVVARYuTq-ZPYiBEZ3EI3zcPM9iYvrWkDU-JjYqv6Y8DN7gRdBsBWFF8lVZngfNzx5sEofhN99gWRf1T9pIiIb35TyqF3PpKrNlgRwNIOtxgss2rm-WNqED5B6SGuHIasYrPkaLwtbcwC5NRGRMHT88aGhq-7mIpzoyBQhF2OPqjeZ-wH18TbW1Jz5byh-CzqUSMKRVb3X-M1jnlHNK_m75oWn9kRbeSGBlUEfTlAlK7i6MXfv3E8Nn_Hf5kEcRL7TyVyYLagFk8Q5OClYwj6gXEKWsE9lirRGHTQvUT%5C%22%2C%5C%22it%5C%22%3A8%2C%5C%22rpbr%5C%22%3A%5C%22%5C%22%2C%5C%22rphr%5C%22%3Afalse%7D%2C%5C%22irr%5C%22%3Afalse%7D%22%2C%22MARKETPLACE_FEED_ITEM_IMAGE_WIDTH%22%3A196%2C%22VERTICALS_LEAD_GEN_PHOTO_HEIGHT_WIDTH%22%3A40%2C%22MERCHANT_LOGO_SCALE%22%3Anull%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22${product}%22%7D%2C%22browse_request_params%22%3A%7B%22filter_location_latitude%22%3A${latitude}%2C%22filter_location_longitude%22%3A${longitude}%2C%22commerce_search_sort_by%22%3A%22BEST_MATCH%22%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%7D%2C%22custom_request_params%22%3A%7B%22surface%22%3A%22SEARCH%22%2C%22search_vertical%22%3A%22C2C%22%7D%7D%7D&doc_id=2846705378683003`,
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