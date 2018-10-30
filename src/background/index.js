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
  pauseOrPlayAll: function () {
    chrome.storage.sync.get(['videos', 'pausedVideos'], function (data) {
      let { videos, pausedVideos } = data

      if (pausedVideos) {
        pausedVideos.forEach(video => controls.play(video))
        pausedVideos = false
      } else {
        pausedVideos = videos.filter(function (video) {
          if (video.audible) {
            controls.pause(video)
            return true
          }
        })
      }

      chrome.storage.sync.set({pausedVideos})
    })
  },
  rewindVideos: function () {
    chrome.storage.sync.get(['videos'], function (data) {
      data.videos.forEach(video => {
        if (video.audible) {
          controls.rewind(video)
        }
      })
    })
  }
}

chrome.commands.onCommand.addListener(function (command) {
  shortcutMethods[command]()
})
