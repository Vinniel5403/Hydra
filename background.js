chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    if (!removeInfo.isWindowClosing) {
      chrome.tabs.create({
        url: 'https://www.google.com'
      });
    }
  });
  