import Api from '@/services/Api';

export default {
    // get all songs
    index() {
        return Api().get('songs')
    },
    show(songId) {
        return Api().get(`songs/${songId}`)
    },
    post(newSong) {
        return Api().post('songs', newSong)
    }
}

// index for get all
// show for /songs/:id
