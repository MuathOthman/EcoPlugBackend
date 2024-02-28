const connection = require('../config/db');

const create = (req, res) => {
    const { phoneNumber } = req.body;
    connection.query('INSERT INTO Lataus (kokonaisaika, laskunhinta, asiakas_puh ) VALUES (0, 0, ?)', [phoneNumber], (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Error creating user.' });
        } else {
            res.status(201).send({ message: 'User created successfully.' });
        }
    });
}


module.exports = {
    create
}
