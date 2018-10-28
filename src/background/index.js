chrome.tabs.onUpdated.addListener(function (id, changeData) {
  if (changeData.url || changeData.title) {
    chrome.tabs.query({
      url: [
        'https://www.youtube.com/*',
        'https://tyt.com/*'
      ]},

    function (videos) {
      chrome.storage.sync.set({ videos })
    })
  }
})
