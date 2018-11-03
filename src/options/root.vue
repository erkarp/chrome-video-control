<template lang="pug">
  main
    h1 Customize Video Control
    form(v-on:submit.prevent='save')
      p
        label(for='include-include') Include
        input(type='radio' name='include' v-bind:value='include')
        | or 
        label(for='include-exclude') exclude
        input(type='radio' name='include' v-bind:value='!include')
        | videos with the following URL patterns (one per line)
      textarea {{ patterns }}
      p
        label
          | Fast forward and rewind by 
          input(type='number' name='fstFwdRewind' v-bind:value='seconds' min=0)
          | seconds
      button(type=submit) Save
</template>
<script>
  export default {
    data: () => ({
      include: true,
      seconds: 15,
      patterns: ''
    }),
    created () {
      let _this = this
      console.log(this)
      chrome.storage.sync.get(this._data.keys, function (data) {
        _this.include = data.include
        _this.seconds = data.seconds
        _this.patterns = data.patterns
      })
    },
    mounted () { },
    methods: {
      save: function () {
        const keys = this.data
        console.log('keys', keys)
        chrome.storage.sync.set({
          include: 
        })
      }
    }
  }
</script>
<style lang="scss">
  html, body {
    height: 100%;
    margin: 0px;
  }
  main {
    max-width: 500px;
    margin: 50px auto;
  }
  textarea {
    display: block;
    width: 100%;
    height: 10em;
    resize: none;
    border: 1px solid #737373;
  }
  textarea, input {
    &:focus { outline: none; }
  }
  input[type=number] {
    width: 2.5em;
  }
  button {
    float: right;
  }
</style>
