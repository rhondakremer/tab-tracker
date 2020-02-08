<template>
      <div>
    <h1 style="color: limegreen">{{ title }}</h1>

    <slot>No slot content defined</slot>

  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['title']
}
</script>

<style scoped>

</style>