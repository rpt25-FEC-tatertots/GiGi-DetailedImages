const express = require('express');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/photos', (req, res) => {
  let productId = req.query.product_id;
  db.findProductById(productId)
    .then(data => res.send(data.detailImages))
    .catch(err => res.sendStatus(404));
})

let port = 6001

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});