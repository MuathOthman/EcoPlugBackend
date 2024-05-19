const connection = require('../config/db');

const findAll = (req, res) => {
    connection.query('SELECT * FROM Sijainti',  (err, rows) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Some error occurred while retrieving sijainnit.' });
        } else {
            console.log(`Retrieved ${rows.length} sijainni records:`);
            console.table(rows);

            res.json(rows);
        }
    });
};

const findOne = (req, res) => {
    const name = req.params.id;
    connection.query('SELECT COUNT(*) AS count FROM Latauspiste L JOIN sijaitsee S ON L.latauspisteID = S.latauspisteID JOIN Sijainti SI ON S.sijainti_ID = SI.sijainti_ID WHERE SI.sijainti_ID = ? AND L.tila = 0;', [name],
        (err, rows) => {
            if (err) {
                console.log([name])
                res.status(500).send({ message: err.message || `Error retrieving sijainti with name ${name}.` });
            } else {
                console.log(`Retrieved sijainti with name ${name}:`);
                console.table(rows);
                res.json(rows);
            }
        }
    );
};

const findParkings = (req, res) => {
    const name = req.params.id;
    connection.query('SELECT L.parkki, L.tila, L.latauspisteID, L.sahkonhinta FROM Latauspiste L JOIN sijaitsee S ON L.latauspisteID = S.latauspisteID JOIN Sijainti SI ON S.sijainti_ID = SI.sijainti_ID WHERE SI.sijainti_ID = ?', [name],
        (err, rows) => {
            if (err) {
                console.log([name])
                res.status(500).send({ message: err.message || `Error retrieving sijainti with name ${name}.` });
            } else {
                console.table(rows);
                res.json(rows);
            }
        }
    );
};


const reserveParkingSpot = (req, res) => {
    const latauspisteID = req.params.id;

    // Update the database to mark the parking spot as reserved
    connection.query('UPDATE Latauspiste SET tila = 1 WHERE latauspisteID = ? ', [latauspisteID], (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Error updating parking spot.' });
        } else {
            res.status(200).send({ message: 'Parking spot reserved successfully.', latauspisteID });
        }
    });
};

const updateLocation = (req, res) => {
    const latauspisteID = req.params.id;
    const tila = req.body.tila;
    connection.query('UPDATE Sijainti SET tila = ? WHERE sijainti_ID = ? ', [tila, latauspisteID], (err, result) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Error updating parking spot.' });
        } else {
            res.status(200).send({ message: 'Parking spot updated successfully.', latauspisteID });
        }
    });
};



module.exports ={
    findAll,
    findOne,
    findParkings,
    reserveParkingSpot,
    updateLocation
};


