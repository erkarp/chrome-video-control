export default {
  play: function (video) {
    chrome.tabs.executeScript(video.id, {
      code: 'document.getElementsByTagName("video").item(0).play()'
    })
  },

  pause: function (video) {
    chrome.tabs.executeScript(video.id, {
      code: 'document.getElementsByTagName("video").item(0).pause()'
    })
  },

  rewind: function (video) {
    chrome.tabs.executeScript(video.id, {
      code: 'document.getElementsByTagName("video").item(0).currentTime -= 10'
    })
  },

  highlight: function (video) {
    chrome.tabs.highlight({tabs: video.index})
  },

  close: function (component) {
    chrome.tabs.remove(component.video.id)
    component.$el.remove()
  }
}
