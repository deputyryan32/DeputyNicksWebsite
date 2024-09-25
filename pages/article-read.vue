<template lang="html">
  <div class="about">
    <Navbar/>
    <div>
      <h1> {{this.id}} </h1>
    </div>
    <Footer/>
  </div>
</template>

<script>
// import OtherComponent from './OtherComponent.vue'
import Navbar from '~/components/Navbar.vue'
import ReadPost from '~/components/ReadPost.vue'
import Footer from '~/components/Footer.vue'
// import markdown from 'vue-markdown'

export default {
  components: {
    Navbar,
    ReadPost,
    Footer
  },
  data () {
    return {
      id: this.$route.params.id
    }
  }
};

</script>

<style lang="scss" scoped>
  .about{
    display:grid;
    grid-gap:3em;
    background-color: whitesmoke;
    font-size: 25px;
  }
  h1, p{
    margin: 0px 3em 0px 3em;
  }
</style>
