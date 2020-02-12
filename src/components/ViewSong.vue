<template>
    <Panel title="View Song">
        <div v-if="this.song">
            <p>Title: {{song.title}}</p>
            <p>Album: {{song.album}}</p>
            <p>Artist: {{song.artist}}</p>
            <p>Genre: {{song.genre}}</p>
            <img :src="song.albumImageUrl" />
            <p style="white-space: pre;">Lyrics: {{song.lyrics}}</p>
            <p>Tabs: {{song.tabs}}</p>
            <youtube :video-id="song.youtubeId" :player-width="600"
            :player-height="300"></youtube>
            <button @click="navigateTo({ name: 'edit', params: {songId: song.id}})">Edit Song</button>
        </div>
    </Panel>
</template>

<script>
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel';

export default {
    components: {
        Panel
    },
    data() {
        return {
            song: null
        }
    },
    async mounted() {
        const songId = this.$store.state.route.params.songId
        const song = await SongsService.show(songId)
        this.song = song.data[0]
        console.log(this.song)
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