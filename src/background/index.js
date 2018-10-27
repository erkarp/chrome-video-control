console.log('background!')

function registerVideo (tabId) {
  chrome.storage.sync.get(['videos'], function (data) {
    var videos = data.videos || []

    if (!videos.includes(tabId)) {
      videos.unshift(tabId)
    }

    chrome.storage.sync.set({videos}, function (data) {
      console.log('added video ', videos)
    })
  })
}

chrome.tabs.onUpdated.addListener(function () {
  chrome.tabs.query({
    url: [
      'https://www.youtube.com/*',
      'https://tyt.com/*'
    ]},
  function (data) {
    console.log(data)
    data.forEach(tab => {
      registerVideo(tab.id)
    })
  })
})
