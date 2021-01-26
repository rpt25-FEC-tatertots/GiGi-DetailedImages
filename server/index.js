const express = require('express');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 6001

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});