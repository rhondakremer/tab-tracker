<template>
    <div>
        <h1 id="logo" @click="navigateTo({name: '/'})">Tab Tracker</h1>
        <button @click="navigateTo({name:'songs'})">Browse</button>
        <button v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name:'register'})">Sign Up</button>
        <button v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name:'login'})">Login</button>
        <button v-if="$store.state.isUserLoggedIn" @click="logout">Log Out</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'root'
            })
        }
    }
}
</script>

<style scoped>
#logo {
    cursor: pointer;
}

#logo:hover {
    color: pink;
}
</style>