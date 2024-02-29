const connection = require('../config/db');

const create = (req, res) => {
    const { phoneNumber } = req.body;
    connection.query('INSERT INTO Lataus (kokonaisaika, laskunhinta, asiakas_puh ) VALUES (0, 0, ?)', [phoneNumber], (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Error creating user.' });
        } else {
            const latausId = result.insertId;
            res.status(201).send({ message: 'User created successfully.', latausId: latausId });
        }
    });
}

const get = (req, res) => {
    const { phoneNumber } = req.body;
    connection.query(
        'SELECT latausID FROM Lataus WHERE asiakas_puh = ? ORDER BY latausID DESC LIMIT 1',
        [phoneNumber],
        (err, result) => {
            if (err) {
                res.status(500).send({ message: err.message || 'Error getting user.' });
            } else {
                res.status(200).send({ latausId: result[0] ? result[0].latausID : null });
            }
        }
    );
};


module.exports = {
    create,
    get
}
