console.log('background!')

function registerVideo (tab) {
  chrome.storage.sync.get(['videos'], function (data) {
    var videos = data.videos || []

    for (let i = 0; i < videos.length; i++) {
      if (videos[i].id === tab.id) return
    }

    videos.unshift(tab)

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
    data.forEach(tab => {
      registerVideo(tab)
    })
  })
})
