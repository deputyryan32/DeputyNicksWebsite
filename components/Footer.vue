<template lang="html">
  <div class="footer">
    <div class="footeritems">
      <div class="styled-footer first">
        <h5>Social</h5>
        <a href="#">twitter</a>
        <a href="#">discord</a>
        <a href="#">facebook</a>
        <a href="#">instagram</a>
        <a href="#">linkedin</a>
        <a href="#">wix</a>
      </div>
      <div class="styled-footer third">
        <h5>Support</h5>
        <a href="#">patreon</a>
        <a href="#">paypal</a>
        <a href="#">donate</a>
        <a href="#">one more</a>
        <a href="#">one more</a>
      </div>
      <div class="styled-footer second">
        <h5>Navigation</h5>
        <nuxt-link class="btn btn-4" to="/">Home</nuxt-link>
        <nuxt-link class="btn btn-4" to="/videos">Videos</nuxt-link>
        <nuxt-link class="btn btn-4" to="/merch">Merch</nuxt-link>
        <nuxt-link class="btn btn-4" to="/about">About</nuxt-link>
      </div>
      <div class="styled-footer forth">
        <h5>Working shedule</h5>
        <a href="#">Wed 16am Video on Youtube</a>
        <a href="#">Fri 20am Video on Youtube</a>
        <a href="#">Sat 14am Stream on Twitch</a>
        <a href="#">Mon - Fri 08:00 - 16:00</a>
        <a href="#">Sat - Sun 10:00 - 12:00</a>
        <a href="mailto:gavelyukworking@gmail.com">gavelyukworking@gmail.com</a>
      </div>
    </div>
    <div class="copyrights">
        Blin&sdotb;-&sdotb;ev 2020
    </div>

  </div>
</template>

<script>
// import OtherComponent from './OtherComponent.vue'
export default {
  name: 'Footer',
  components: {

    // OtherComponent
  },
  data () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style lang="scss" scoped>
// .footer{
//   background-color: green;
//   height: 200px;
//   width: 100%;
// }
.footer{
  display: grid;
  background-color: black;
  min-height: 400px;
  grid-auto-flow: column;
  // grid-gap:20px;
  padding: 0px 20px 0px 20px;
  grid-template-columns: 99%;
        // font-size: 25px;
        // color: white;
  // .logoitem{
  //   display: grid;
  //   justify-content: start;
  //   align-content: center;
  //   margin:10px;
  //
  // }

  font-family: sans-serif;
  font-weight: lighter;
  color:#ffffff;
  font-size: 22px;
  text-align: center;
  top:50%;

  .footeritems{
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: 20% 20% 20% 40%;
    grid-area: 1;
    grid-auto-flow: column;
    grid-gap: 1rem;
  }
  .copyrights{
    display: grid;
    justify-content: center;
    align-content: center;
    // grid-template-columns: 100%;
    grid-column:1/3;
    grid-row:2/3;
    margin:20px;
  }
  .styled-footer{
    a, h5{
      color:#dddddd;
      text-decoration: none;
      display: grid;
      justify-content: center;
      align-content: center;
      grid-template-rows: 25% 25% 25% 25%;
      margin:10px;
    }
    h5{
      font-size: 28px;
      margin:30px;
    }
  }
}
</style>
