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
    }
}
</script>

<style scoped>

</style>