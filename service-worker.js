const getElement = () => {
    console.log("action.onClicked");
}

// Turns the extension ON or OFF
chrome.action.onClicked.addListener((tab) => {
    chrome.action.getBadgeText({}, (tab) => {
        if (tab === "ON") {
            chrome.action.setBadgeText({ text: "OFF" });
        } else {
            chrome.action.setBadgeText({ text: "ON" });
        }
    });

    if (!tab.url.includes('chrome://')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: getElement
        });
    }
});

// Defaults extension to OFF
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({ text: "OFF" });
});

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    console.log(`Request: ${JSON.stringify(request)}`);
    sendResponse({ code: 200, message: "OK" });
});




