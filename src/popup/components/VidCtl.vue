<template lang="pug">
  li
    span {{ video.title }}
    menu
      button(v-on:click='play' v-show='!video.audible') play
      button(v-on:click='pause' v-show='video.audible') pause
      button(v-on:click='rewind') -10
      button(v-on:click='highlight') tab
      button(v-on:click='close') X
</template>

<script>
  export default {
    name: 'VidCtl',
    props: ['video'],

    methods: {
      play: function () {
        chrome.tabs.executeScript(this.video.id, {
          code: 'document.getElementsByTagName("video").item(0).play()'
        })
      },
      pause: function () {
        chrome.tabs.executeScript(this.video.id, {
          code: 'document.getElementsByTagName("video").item(0).pause()'
        })
      },
      rewind: function () {
        chrome.tabs.executeScript(this.video.id, {
          code: 'document.getElementsByTagName("video").item(0).currentTime -= 10'
        })
      },
      highlight: function () {
        chrome.tabs.highlight({tabs: this.video.index})
      },
      close: function () {
        chrome.tabs.remove(this.video.id)
        this.$el.remove()
      }
    }
  }
</script>

<style>
  menu {
    margin-top: 0;
    padding-left: 0;
  }

  button:last-child {
    float: right;
  }

  .play, .pause {
    width: 50px;
  }
</style>

