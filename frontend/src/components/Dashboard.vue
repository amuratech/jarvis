<template>
  <div class="section container">
    <h1 class="title is-3">Dashboard</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template>

<script>
import axios from 'axios'
import Bot from './Bot'

export default {
  name: 'Dashboard',
  components: {
    Bot
  },
  methods: {
    fetchUserInfo() {
      axios.get('/api/v1/user/details/')
        .then(res=>{
          this.user = res.data.info
        }).catch(err=>{

        })
    },
    sentChat(){

    }
  },
  created() {
    this.fetchUserInfo()
    // console.log(this.$toastr)
    // this.$toastr.success({
    //     message:'it worked'
    // })
  },
  data () {
    return {
      chat: [],
      user:{},
      text: ''
    }
  }
}
</script>
