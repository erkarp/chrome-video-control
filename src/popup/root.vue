<template lang="pug">
    div {{videos}}
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
        console.log(data.videos)
        _this.videos = data.videos.toString()
      })
    },
    mounted () { },
    methods: {
      tab () {

      }
    }
  }
</script>
<style lang="scss">
  div {
    color: blue
  }
</style>
