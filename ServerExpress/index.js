// index.js

const express = require('express');

const cdn = express();

cdn.get("/:file", (request, response) => {
    var a = request.params.file;
    response.sendFile(__dirname + "/cdn-files/" + a, (err) => {
        if (err) {
            console.error("Sumthing Bad Happened On CDN\n" + err);
        }
        else {
            console.log("fine cdn");
        }
    });
});

cdn.get("/cdn/:file", (request, response) => {
    var a = request.params.file;
    response.sendFile(__dirname + "/cdn-files/images/" + a, (err) => {
        if (err) {
            console.error("Sumthing Bad Happened On CDN\n" + err);
        }
        else {
            console.log("fine cdn");
        }
    });
});

cdn.listen(3300, () => {
    console.log("start cdn");
});