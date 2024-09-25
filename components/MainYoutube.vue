<template>
  <div class="">
    <!-- <Navbar/> -->
    <div v-bind:class="color">
      <h3>{{articlename}}</h3>
    <!-- <h1>{{this.infox}}</h1> -->
    <Youtube v-for="video in reverse" :key="video" :joke="video.snippet.title" :thumb="video.snippet.thumbnails.high.url" :videoid="video.snippet.resourceId.videoId"

     class="youtube"/>
      <!-- <div class="right-side">

      </div> -->
    </div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import axios from 'axios'
// import Navbar from '~/components/Navbar.vue'
import Youtube from '~/components/Youtube.vue'
// import Footer from '~/components/Footer.vue'

export default {
  name: 'MainYoutube',
  props:['color','articlename',"playlist","youkey"],
  components: {
    // Navbar,
    Youtube,
    // Footer
  },
  data(){
    return{
      reverse: []
    }
  },
  methods: {

  },
  computed: {

  },
  // filters:{
  //
  // },
  // mounted:{
  //
  // },
  // methods:{
  //
  // },
  // computed:{
  //
  // },
  // updated:{
  //
  // },
  async created(){
    // const config = {
      // headers: {
      //   'Accept': 'application/json'
      // },
    //   'part': 'snippet',
    //   'key': 'AIzaSyDwNbtxcWGG7CMa9byPBQbQtBhgZsb3RXM',
    //   'maxResults': '10',
    //   'playlistId': 'PLlpl3XXn_Bin98Q7fNjaTUOYQXhDZBU-i'
    // }
    try {
      const res = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+this.playlist+"&maxResults=10&key="+this.youkey)
      // console.log(res.data)
      // this.videos = res.data
      this.reverse = res.data.items.reverse()
      // console.log(this.reverse)
    } catch (err) {
      // console.log(err)
    }
  }

  // finish export
}
</script>

<style lang="scss" scoped>
// *{outline:1px solid blue;}
$bg: #333555;
$light-bg: #333555;
$dark-bg: #333555;
.youtube{
  // top:300px;
  // background-color: $bg;
  // width: 100%;
  // display: grid;
  // grid-gap:1em;
  // padding:1em;
  grid-auto-rows:1fr;
  grid-template-columns: repeat(1,1fr);
  // padding: 0px 20px 0px 20px;
  // grid-template-columns: 98%;
  // font-size: 25px;
}
h3{
  position: relative;
  margin: 1px;
  // font-family: 'Courier New', Courier, monospace;
  font-family: sans-serif;
  font-weight: lighter;
  color:#ffffff;
  font-size: 32px;
  text-align: center;
  top:50%;
}
.red{
  background-color: #B71C1C;
}
.yellow{
  background-color: #880E4F;
}
.blue{
  background-color: #4A148C;
}
.grey{
  background-color: #333333;
}
// .youtube > div.article{
//   background-color: $light-bg;
//   padding: 1em;
// }
// .youtube > div.article:nth-child(odd){
//   background-color: $dark-bg;
//   padding: 1em;
// }

</style>
