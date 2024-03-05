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
        'SELECT latausID, laskunhinta, kokonaisaika FROM Lataus WHERE asiakas_puh = ? ORDER BY latausID DESC LIMIT 1',
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

const freeLatauspiste = (latauspisteID) => {
    connection.query('UPDATE Latauspiste SET tila = 0 WHERE latauspisteID = ?', [latauspisteID], (err, result) => {
        if (err) {
            console.error('Error updating Latauspiste:', err);
        } else {
            console.log('Latauspiste updated successfully:', result);
        }
    });
};

const updateLataus = (latausID, kokonaisaika, laskunhinta) => {
    connection.query('UPDATE Lataus SET kokonaisaika = ?, laskunhinta = ? WHERE latausID = ?', [kokonaisaika, laskunhinta, latausID], (err, result) => {
        if (err) {
            console.error('Error updating Lataus:', err);
        } else {
            console.log('Lataus updated successfully:', result);
        }
    });
};


module.exports = {
    create,
    get,
    freeLatauspiste,
    updateLataus,
}
