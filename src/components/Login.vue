<template>
  <div>
    <Panel title="Login">
      <input type="email" name="email" v-model="email" placeholder="email">
      <br>
      <input type="password" name="password" v-model="password" placeholder="password">
      <br>
      <div class="error" v-html="error" />
      <button @click="login">Login</button>
    </Panel>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  // watch: {
  //   email(value) {
  //     console.log("email has changed", value)
  //   }
  // },
  methods: {
    async login() {
      // console.log("login button was clicked", this.email, this.password)
      try {
        const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
            this.error = error.response.data.error
      } 
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
