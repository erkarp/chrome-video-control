<template lang="pug">
  li
    span {{ video.title }}
    menu
      button(v-on:click='play' v-show='!video.audible') play
      button(v-on:click='pause' v-show='video.audible') pause
      button(v-on:click='rewind') -15
      button(v-on:click='fastFwd') +15
      button(v-on:click='highlight') tab
      button(v-on:click='close') X
</template>

<script>
  import controls from '../../controls'
  
  export default {
    name: 'VidCtl',
    props: ['video'],

    methods: {
      play: function () {
        controls.play(this.video)
      },
      pause: function () {
        controls.pause(this.video)
      },
      rewind: function () {
        controls.rewind(this.video)
      },
      fastFwd: function () {
        controls.fastFwd(this.video)
      },
      highlight: function () {
        controls.highlight(this.video)
      },
      close: function () {
        controls.close(this)
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

