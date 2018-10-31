function execute (videoId, videoCode) {
  return chrome.tabs.executeScript(videoId, {
    code: 'document.getElementsByTagName("video").item(0)' + videoCode
  })
}

export default {
  play: function (video) {
    execute(video.id, '.play()')
  },

  pause: function (video) {
    execute(video.id, '.pause()')
  },

  rewind: function (video) {
    execute(video.id, '.currentTime -= 15')
  },

  fastFwd: function (video) {
    execute(video.id, '.currentTime += 15')
  },

  highlight: function (video) {
    chrome.tabs.highlight({tabs: video.index})
  },

  close: function (component) {
    chrome.tabs.remove(component.video.id)
    component.$el.remove()
  }
}
