const { Song } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const songs = await Song.findAll({
                limit: 20
            })
            res.send(songs)    
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch songs'
            })
        }
    },
    async show(req, res) {
        try {
            console.log(req.params.songId)
            const song = await Song.findAll({
                where: { id : req.params.songId } 
            })
            res.send(song)    
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch song'
            })
        }
    },
    async post(req, res) {
        console.log(req.body)
        try {
            const song = await Song.create(req.body)
            res.send(song)    
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to create a song'
            })
        }
    },
    async save(req, res) {
        console.log(req.body)
        try {
            const song = await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(song)    
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to update the song'
            })
        }
    }
}