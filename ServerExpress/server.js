// server.js

const express = require('express');

const server = express();

server.get("/", (request, response) => {
    response.sendFile("C:/Users/u24143/Documents/GitHub/DaRoca/DaRoca/DaRoca-Client/index.html", (err) => {
        if (err){
            console.error("Houve um erro :(\n" + err);
        }
        else{
            console.log("Ok");
        }
    });
});

server.get("/login/cadastro", (request, response) => {
    response.sendFile("C:/Users/u24143/Documents/GitHub/DaRoca/DaRoca/DaRoca-Client/Login/Cadastro/index.html", (err) => {
        if (err){
            console.error("Houve um erro :(\n" + err);
        }
        else{
            console.log("Ok");
        }
    });
});

server.get("/login/entrar", (req, res) => {
    res.sendFile("C:/Users/u24143/Documents/GitHub/DaRoca/DaRoca/DaRoca-Client/Login/Entrar/index.html", (err) => {
        if (err){
            console.error("Houve um erro :(\n" + err);
        }
        else{
            console.log("Ok");
        }
    });
});

server.get("/produtos/:idProduto", (req, res) => {
    res.sendFile("C:/Users/u24143/Documents/GitHub/DaRoca/DaRoca/DaRoca-Client/Products/Product/index.html", (err) => {
        if (err){
            console.error("Houve um erro :(\n" + err);
        }
        else{
            console.log("Ok");
        }
    });
});

server.listen(80, "177.220.18.92", () => {
    console.log("Start");
})