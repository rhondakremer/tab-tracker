<template>
    <div>
      <Panel title="Song Metadata">
        <form name="create-a-song">
        <input type="text" name="title" v-model="newSong.title" placeholder="title" required><br>
        <input type="text" name="artist" v-model="newSong.artist" placeholder="artist" required><br>
        <input type="text" name="genre" v-model="newSong.genre" placeholder="genre" required><br>
        <input type="text" name="album" v-model="newSong.album" placeholder="album" required><br>
        <input type="text" name="albumImageUrl" v-model="newSong.albumImageUrl" placeholder="album image URL"><br>
        <input type="text" name="youtubeId" v-model="newSong.youtubeId" placeholder="Youtube ID"><br>
        <textarea name="lyrics" placeholder="lyrics" v-model="newSong.lyrics"></textarea><br>
        <textarea name="tabs" placeholder="tabs" v-model="newSong.tab"></textarea><br>
        <br>
        <div class="error" v-html="error" />
        </form>
        <button @click="save">Save</button>
      </Panel>
    
  </div>
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
            newSong: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tabs: null
            },
            error: null
        }
    },
    async mounted() {
        try {
            const songId = this.$store.state.route.params.songId
            console.log(songId)
            this.newSong = (await SongsService.show(songId)).data[0]
            console.log("you here?", this.newSong)
        } catch (error) {
            console.log(error)
        } 
    },
      methods: {
        async save() {
            console.log(this.newSong)
            const songId = this.$store.state.route.params.songId
            this.error = null;
            const areAllFieldsFilled = Object
                .keys(this.newSong)
                .every(key => !!this.newSong[key])
            if (!areAllFieldsFilled) {
                this.error = 'Please fill all required fields.'
                return
            }
            try {
                await SongsService.put(this.newSong)
                this.$router.push({
                name: 'songs',
                params: {
                    songId: songId
                }
                })
            } catch (error) {
                console.log(error)
            } 
        }
  }
}
</script>

<style scoped>

</style>