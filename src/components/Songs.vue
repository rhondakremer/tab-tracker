<template>
    <div>
   <Panel title="Songs">
        <div v-for="song in songs" :key="song.id">
            <p>Title: {{song.title}}</p>
            <p>Album: {{song.album}}</p>
            <p>Artist: {{song.artist}}</p>
            <p>Genre: {{song.genre}}</p>
            <img :src="song.albumImageUrl" />
            <button @click="navigateTo({ name: 'song', params: { songId: song.id } })">View Lyrics/Tabs</button>
            <hr>
        </div>
        <button @click="navigateTo({ name: 'create' })">Add A Song</button>
    </Panel>
    
  </div>
</template>

<script> 
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService';

export default {
    components: {
        Panel
    },
    data() {
        return {
            songs: []
        }
    },
    async mounted() {
        this.songs = (await SongsService.index()).data
        console.log("the songs are", this.songs)
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>

</style>