<template>
  <div>
    <h1>Register</h1>
    <form name="tab-tracker-form">
    <input type="email" name="email" v-model="email" placeholder="email">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password" autocomplete="new-password">
    <br>
    <div class="error" v-html="error" />
    </form>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  // watch: {
  //   email(value) {
  //     console.log("email has changed", value)
  //   }
  // },
  methods: {
    async register() {
      // console.log("register button was clicked", this.email, this.password)
      // const response = 
      try {
        const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
          this.error = error.response.data.error
      } 
      
      // console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
