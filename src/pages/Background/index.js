console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
    let listenerResponse = "";
    let request = fetch("https://www.facebook.com/api/graphql", {
        method: "POST",
        mode: "cors",
    })
        .then(response => {
            console.log("Response from Auth Success:", response)
            listenerResponse = response;
            return response.json(); // Assuming the response data is json
        })
        .then(data => {
            console.log("Response data: ", data);
            listenerResponse = data;
            return {data: data, success: true};
        })
        .catch(error => {
            listenerResponse = error;
            console.log("Response from AUTH Fail:", error)
            return {data: error, success: false};
        });

    Promise.resolve(request);

    console.log("End of background task");

    return "empty response";
});