<template lang="html">
  <div class="you-box">
    <div class="articlez">

        <h5>{{ joke }}</h5>

        <img v-if="hotswap" :src="thumb" v-on:click="hotswapf" alt="" width="560" height="315">
        <iframe v-else v-on:click="hotswapf" width="560" height="315" :src="'https://www.youtube-nocookie.com/embed/'+videoid" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <!-- <a :href="https://www.youtube.com/watch?v=r5kDCCknp4M&list=PLlpl3XXn_BinBiI04wPDAA9Vj3hPfLCwS&index=3&t=0s"> -->
      <!-- <img :src="thumb" alt=""> -->
      <!-- <iframe width="560" height="315" :src="'https://www.youtube-nocookie.com/embed/'+videoid" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <!-- <iframe width="560" height="315" :src="'https://www.youtube-nocookie.com/embed/'+videoid" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
// import OtherComponent from './OtherComponent.vue'
export default {
  name: 'Youtube',
  props: ['joke', 'thumb', 'videoid'],
  components: {
    // OtherComponent
  },
  data () {
    return {
      greeting: this.thumb,
      hotswap: true
    }
  },
  methods: {
    hotswapf: function () {
      this.hotswap = !this.hotswap
    }
  }
}
</script>

<style lang="scss" scoped>
// *{outline: 1px solid green;}
$light-bg:#ffffff;
$dark-bg:#dddddd;
$readmorebuttons:#333333;
.you-box{
  background-color: rgba(100,100,100, 0.8);
  // width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  // grid-auto-rows:50%;
  font-size: 25px;
}
// .you-box > div.articlez{
//   background-color: $dark-bg;
//   padding: 1em;
// }
// .you-box > div.articlez:nth-child(odd){
//   background-color: $readmorebuttons;
//   padding: 1em;
// }
.articlez{
  // padding-top: 1em;
  display: grid;
  // grid-gap:1em;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 0px;
  border: 5px solid white;
  // height: 500px;
  width: auto;
  // padding: 10px 10px 10px 10px;
}
.container{
  position: relative;
}
h5{
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  color:white;
  font-size: 26px;
  text-align: center;
  // height: 50%;
// bottom: 20px;
// right: 20px;
  background-color: rgba(0,0,0, 0.1);
// padding-left: 5px;
// padding-right: 5px;
}
p{
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  text-align: justify;
  text-justify: inter-character;
}
img{
  width:99%;
  height:315px;
  object-fit: cover;
  // float: left;
  // text-align: center;
}
iframe{
  width:99%;
  height:315px;
  // float: left;
  // text-align: center;
}
a{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 22px;
  float: right;
  font-weight:bolder;
  text-align: right;
  text-decoration: none;
  text-transform: uppercase;
  color: $readmorebuttons;
}
a::before{
  content:'читать';
}
div.articlez:nth-child(even){
  a{
    color: $readmorebuttons;
  }
}
div.articlez:nth-child(odd){
  a{
    color: $light-bg;
  }
}
</style>
