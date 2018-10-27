<template lang="pug">
    div
      span(v-model=test ref=test)
      div(v-model=videos)
</template>
<script>
  export default {
    data () {
      return {
        test: 'testing',
        videos: (function () {
          chrome.storage.sync.get(['videos'], function (data) {
            console.log(data)
            return data.videos.toString()
          })
        })()
      }
    },
    computed: { },
    created () {
      console.log('popup!')
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
