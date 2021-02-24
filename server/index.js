const express = require('express');
// const db = require('../database/index.js');
const axios = require('axios');
const compression = require('compression');

let app = express();
app.use(compression());
app.use('/:productID', express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/photos/:productID', (req, res) => {
//   let productId = req.params.productID;
//   db.findProductById(productId)
//     .then(data => res.send(data.detailImages))
//     .catch(err => res.sendStatus(404));
// })

app.get('/photos/:productID', async (req, res) => {
  let productId = req.params.productID;
  //ping iamges service with the prod id
  try {
    const images = await axios.get(`http://54.241.34.87:5003/images/detailImages/${productId}`)
    // console.log('successfully got images from Images', images.data);
    const { detailImages } = images.data;
    res.send(detailImages.reverse());
  } catch (error) {
    console.log('error in getting images from Images service', error);
  }

})

let port = 5001

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});