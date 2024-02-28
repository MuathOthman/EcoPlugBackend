const connection = require('../config/db');

const createCharge = (req, res) => {
    const { latauspisteID, latausID } = req.body;
    connection.query('INSERT INTO suorittaa (latauspisteID, latausID ) VALUES (?, ?)', [latauspisteID, latausID], (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Error creating user.' });
        } else {
            res.status(201).send({ message: 'Charging stated' });
        }
    });
}




module.exports = {
    createCharge
}
