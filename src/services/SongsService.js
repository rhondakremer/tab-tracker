import Api from '@/services/Api';

export default {
    // get all songs
    index() {
        return Api().get('songs')
    },
    post(newSong) {
        return Api().post('songs/create', newSong)
    }
    
}

// index for get all
// show for /songs/:id
