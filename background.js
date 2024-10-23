const openGoogleNTimes = (n) => {
    for (let i = 0; i < n; i++) {
      chrome.tabs.create({ url: 'https://www.google.com' });
    }
  };
  
  chrome.tabs.onRemoved.addListener((_, { isWindowClosing }) => {
    if (!isWindowClosing) openGoogleNTimes(1);
  });
  