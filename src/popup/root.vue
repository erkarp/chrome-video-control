<template lang="pug">
  div
    ul
      VidCtl(v-for="video in videos" v-bind:video="video"  v-bind:key="video.id")
    button(v-on:click="clear()") Clear
</template>

<script>
  import VidCtl from './components/VidCtl.vue'
  export default {
    data () {
      return {
        videos: []
      }
    },
    components: { VidCtl },
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
    width: 350px;
    padding-left: 0;
  }
</style>
