const mysql = require('mysql');

// Configuració de la connexió a la base de dades
const connection = mysql.createConnection({
    host: '192.168.56.10',
    user: 'root',
    password: 'alumne',
    database: 'sakila'
});

// Connectar a la base de dades
connection.connect((error) => {
    if (error) {
        console.error('Error de connexió a la base de dades: ' + error.message);
        return;
    }
    console.log('Connexió a la base de dades establerta');
});

// Exemple de consulta
connection.query('SELECT * FROM customer', (error, resultats) => {
    if (error) {
        console.error('Error en la consulta: ' + error.message);
        return;
    }
    console.log('Resultats de la consulta:', resultats);
});

// Tancar la connexió quan hagis acabat
connection.end();
