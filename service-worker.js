chrome.tabs.onUpdated.addListener(NOTcheckIfValUpdated);

function NOTcheckIfValUpdated(tabId, changeInfo, tab) {
    const url = changeInfo.url;
    if (url && url.includes("playvalorant.com")) {
        chrome.tabs.remove(tab.id);
        const newURL = "https://www.youtube.com/watch?v=WZoZWFj2BRE";
        chrome.tabs.create({ url: newURL });
    }

}