const connection = require('../config/db');

const create = (req, res) => {
    const { phoneNumber } = req.body;
    connection.query('INSERT INTO Lataus (kokonaisaika, laskunhinta, asiakas_puh) VALUES (NULL, NULL, ?)', [phoneNumber], (err, result) => {
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

const freeLatauspiste = (req, res) => {
    const { latauspisteID } = req.body;
    connection.query(
        'UPDATE Latauspiste SET tila = 0 WHERE latauspisteID = ?',
        [latauspisteID],
        (err, result) => {
            if (err) {
                res.status(500).send({ message: err.message || 'Error updating Latauspiste.' });
            } else {
                res.status(200).send({ message: 'Latauspiste updated successfully.' });
            }
        }
    );
};

const updateLataus = (req, res) => {
    const { latausID, chargingTime, totalCost, phoneNumber} = req.body;
    connection.query(
        'UPDATE Lataus SET kokonaisaika = ?, laskunhinta = ? WHERE latausID = ? and asiakas_puh = ?',
        [parseFloat(chargingTime), parseFloat(totalCost), latausID, phoneNumber],
        (err, result) => {
            if (err) {
                console.error('Error updating Lataus:', err);
                res.status(500).send({ message: err.message || 'Error updating Lataus.' });
            } else {
                console.log('Lataus updated successfully:', result);
                res.status(200).send({ message: 'Lataus updated successfully.' });
            }
        }
    );
};

module.exports = {
    create,
    get,
    freeLatauspiste,
    updateLataus,
};