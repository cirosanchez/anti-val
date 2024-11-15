chrome.tabs.onUpdated.addListener(NOTcheckIfValUpdated);

function NOTcheckIfValUpdated(tabId, changeInfo, tab) {
    const url = changeInfo.url;
    if (url && (url.includes("1v1.lol" || url.includes("1001juegos.com") || url.includes("minijuegos.com") || url.includes("cooljuegos.com") || url.includes("playvalorant.com")))) {
        chrome.tabs.remove(tab.id);
        const newURL = "https://www.youtube.com/watch?v=XhAMZq44OTQ&t=4s";
        chrome.tabs.create({ url: newURL });
    }

}