// index.js

const express = require("express");
const cors = require('cors');
const sql = require("mssql");

const app = express();
app.use(express.static('imagens'));

app.use(cors());

///////////////////////////
// SQL Server configuration
var config = {
    user: 'sa',
    password: 'Ratinho0411',
    server: 'localhost', // ou o endereço do servidor SQL Server
    database: 'Teste',
    options: {
        encrypt: false // Se você estiver usando uma conexão segura (HTTPS), defina como true
    }
}
///////////////////////////
///////////////////////////

// Connect to SQL Server
sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
});

// Define route for fetching data from SQL Server
app.get("/produtos", (request, response) => {
    // Execute a SELECT query
    new sql.Request().query("SELECT * FROM daroca.produtos", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

app.get("/produtos/:nomeProduto", (request, response) => {
    const nome = request.params.nomeProduto;
    console.log("SELECT * FROM daroca.produtos where nome LIKE '"+nome+"'");

    new sql.Request().query("SELECT * FROM daroca.produtos where nome LIKE '%"+nome+"%'", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Define route for fetching data from SQL Server
app.get("/categoria/:categoria", (request, response) => {
    const codDaCategoria = request.params.categoria;
    // Execute a SELECT query
    new sql.Request().query("SELECT * FROM daroca.produtos where categoria="+codDaCategoria, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Define route for fetching data from SQL Server
app.get("/carousel", (request, response) => {
    // Execute a SELECT query
    new sql.Request().query("SELECT * FROM daroca.carousel", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

app.get("/carousel/:carouselNome", (request, response) => {
    const nome = request.params.carouselNome;
    console.log("SELECT * FROM daroca.carousel where nome LIKE '"+nome+"'");

    new sql.Request().query("SELECT * FROM daroca.carousel where nome LIKE '%"+nome+"%'", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000...");
});