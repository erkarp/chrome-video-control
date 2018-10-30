import controls from '../controls'

chrome.tabs.onUpdated.addListener(function (id, changeData) {
  if (changeData.url || changeData.title || changeData.audible) {
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

const shortcutMethods = {
  pauseAllVideo: function () {
    chrome.storage.sync.get(['videos'], function (data) {
      data.videos.forEach(video => {
        if (video.audible) {
          controls.pause(video)
        }
      })
    })
  }
}

chrome.commands.onCommand.addListener(function (command) {
  shortcutMethods[command]()
})
