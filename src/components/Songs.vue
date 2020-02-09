<template>
    <div>
   <Panel title="Songs">
        <div v-for="song in songs" :key="song.title">
            {{song.title}}
            {{song.album}}
            {{song.artist}}
        </div>
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
        this.songs = await SongsService.index()
    }
}
</script>

<style scoped>

</style>