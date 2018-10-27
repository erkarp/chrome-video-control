<template lang="pug">
  div
    ul
      li(v-for="video in videos" v-bind:key="video.id")
        img(v-bind:src="video.favIconUrl")
        span {{ video.title }}
    button(v-on:click="clear()") Clear
</template>

<script>
  export default {
    data () {
      return {
        videos: []
      }
    },
    computed: { },
    created () {
      let _this = this
      chrome.storage.sync.get(['videos'], function (data) {
        _this.videos = data.videos
      })
    },
    mounted () { },
    methods: {
      clear: function () {
        chrome.storage.sync.set({ videos: [] })
      }
    }
  }
</script>

<style lang="scss">
  ul {
    list-style: none;
    width: 250px;
    padding-left: 0;
  }
  
  li {
    display: flex;
    align-content: space-between;
    align-items: center;
    padding-bottom: 5px;
  }
  
  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
</style>
