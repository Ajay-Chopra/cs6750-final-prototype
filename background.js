chrome.tabs.onActivated.addListener((activeInfo) => {
    const { tabId, windowId } = activeInfo;

    chrome.tabs.query({active: true, windowId: windowId}, ([tabs]) => {
        console.log(tabs);
        tabUrl = tabs.url
        if (tabUrl == "https://www.bbc.com/news/articles/cgq7nxkpkp4o") {

                
            console.log("HERE");
            chrome.tabs.sendMessage(tabId, {});

    
        }
    })
    
})