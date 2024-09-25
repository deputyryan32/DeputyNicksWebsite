<template>
  <div class="container">
    <Navbar/>
    <div class="youtube">
    <h1>Latest Videos</h1>
  </div>
    <div class="youtube">
      <div class="red">
          <MainYoutube color="red" articlename="Web Dev" playlist="PLlpl3XXn_BilH0bItpa2zrH4lVCusvbwq" youkey="AIzaSyBulNUwdFbe25b9m_7uGC9c1cULp49UMSA"/>
      </div>
      <div class="yellow">
          <MainYoutube color="yellow" articlename="Linux" playlist="PLlpl3XXn_Bik-5SdpKSyMDUyPKi2iJAda" youkey="AIzaSyBulNUwdFbe25b9m_7uGC9c1cULp49UMSA"/>
      </div>
      <div class="blue">
          <MainYoutube color="blue" articlename="Projects" playlist="PLlpl3XXn_Bikj3gTwclTsaThJlpviiqFz" youkey="AIzaSyBulNUwdFbe25b9m_7uGC9c1cULp49UMSA"/>
      </div>
    </div>
<!-- /////////////////////////////////////////////////////// -->


<!-- ////////////////////////////////////////////////////// -->

    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '~/components/Navbar.vue'
import Youtube from '~/components/Youtube.vue'
import Footer from '~/components/Footer.vue'
import MainYoutube from '~/components/MainYoutube.vue'

export default {
  name: 'VideosPage',
  components: {
    Navbar,
    Youtube,
    MainYoutube,
    Footer
  },
  data(){
    return{
      // videos:[]
    }
  },
  mounted () {
    this.$myInjectedFunction('test')
  }
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
  // async created(){
  //   const config = {
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //   }
  //   try {
  //     const res = await axios.get("https://icanhazdadjoke.com/search", config)
  //     console.log(res.data)
  //     this.jokes = res.data.results
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // finish export
}
</script>

<style lang="scss" scoped>
// *{outline:1px solid blue;}
$bg: #01579B;
$light-bg: #333555;
$dark-bg: #333555;
  h1{
    position: relative;
    margin: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-family: sans-serif;
    font-weight: lighter;
    color:#ffffff;
    font-size: 52px;
    text-align: center;

  }
  .youtube{
    background-color: $bg;
    display: grid;
    grid-auto-rows:1fr;
    grid-template-columns: repeat(3, 1fr);
    font-size: 25px;
  }
  .youtube > div.article{
    background-color: $light-bg;
    padding: 1em;
  }
  .youtube > div.article:nth-child(odd){
    background-color: $dark-bg;
    padding: 1em;
  }

</style>
