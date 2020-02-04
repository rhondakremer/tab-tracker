<template>
    <div>
        <h1 id="logo" @click="navigateTo({name: '/'})">Tab Tracker</h1>
        <button @click="navigateTo({name:'register'})">Sign Up</button>
        <button @click="navigateTo({name:'login'})">Login</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
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