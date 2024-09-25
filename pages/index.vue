<template>
  <div class="container">
    <Navbar/>
    <div class="main-content">
      <div class="left-side">
        <TextPosts/>
      </div>
      <div class="right-side">
        <!-- <MainYoutube/> -->
        <MainYoutube color="grey" articlename="Blog" playlist="PLlpl3XXn_BinBiI04wPDAA9Vj3hPfLCwS" youkey="AIzaSyApXFbuT8cQmUFhVQr_V56w7DdaC6r3GGE"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

// import blogsFromJson from '~/assets/articles.json';


import Navbar from '~/components/Navbar.vue'
import TextPosts from '~/components/TextPosts.vue'
import Youtube from '~/components/Youtube.vue'
import MainYoutube from '~/components/MainYoutube.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'Index',
  components: {
    Navbar,
    TextPosts,
    Youtube,
    MainYoutube,
    Footer
  }
}
</script>

<style lang="scss" scoped>
// *{outline:1px solid blue;}
.container {
  // background-color: green;
  font-size: 25px;
}
.main-content{
  display: grid;
  // /* grid-gap:5em;
  /* grid-auto-rows: 200px; */
  // /* grid-template-columns: 100%; */
  /* padding: 0px 20px 0px 20px; */
  // grid-template-columns: 60% 40%;
}
.left-side{
  display: grid;
  grid-column:1/5;
  grid-row:1;
  // grid-gap:1em;
  // padding: 20px;

  /* justify-content: start; */
  /* align-content: center; */
  /* margin:10px; */
}
.right-side{
  display: grid;
  grid-column:5;
  grid-row:1/5;
  /* justify-content: start; */
  /* align-content: center; */
  /* margin:10px; */
}

</style>
