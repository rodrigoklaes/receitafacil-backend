var Geladeira = require('../models/Geladeira');
module.exports = {
    getGeladeira: (req, res) => {
        try {
            Geladeira
                .fetchAll({ withRelated: ['usuario'] })
                .then(geladeira => res.json({ geladeira }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar geladeiras' });
        }
    },
    getGeladeiraById: (req, res) => {
        try {
            Geladeira
                .where('id', req.params.id)
                .fetchAll({ withRelated: ['usuario'] })
                .then(geladeira => res.json({ geladeira }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar geladeira' });
        }
    },
    getGeladeiraByUsuario: (req, res) => {
        try {
            Geladeira
                .where('idUsuario', req.params.id)
                .fetchAll({ withRelated: ['usuario'] })
                .then(geladeira => res.json({ geladeira }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao listar geladeira' });
        }
    },
    postGeladeira: (req, res) => {
        try {
            new Geladeira(req.body)
                .save().then(saved => res.json({ saved }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao inserir geladeira' });
        }
    },
    putGeladeira: (req, res) => {
        try {
            Geladeira
                .where('id', req.params.id)
                .fetch()
                .then(geladeira => {
                    geladeira
                        .save(req.body)
                        .then(saved => res.json({ saved }));
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao alterar geladeira' });
        }
    },
    deleteGeladeira: (req, res) => {
        try {
            Geladeira
                .where('id', req.params.id)
                .destroy()
                .then(destroyed => res.json({ destroyed }))
                .catch(err => {
                    console.log(err);
                    res.status(400).send({ error: 'Erro: ' + err });
                });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Erro ao remover geladeira' });
        }
    },

}
// module.exports = app => app.use('/geladeira', routes);