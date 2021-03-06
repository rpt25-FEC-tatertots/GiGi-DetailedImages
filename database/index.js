const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/detailedImages', {useNewUrlParser: true, useUnifiedTopology: true});

//get the default connection
const db = mongoose.connection;
//bind connection to error event
db.on('error', console.error.bind(console, 'connection error:'));
//once the connection opens, I will see the console.log
db.once('open', function () {
  console.log("we're connected to MongoDb!")
});

let imageSchema = mongoose.Schema({
  productId: Number,
  detailImages: Array
});

//compile the schema into a Model
let Images = mongoose.model('Images', imageSchema);

let addOne = (imagesData) => Images.create(imagesData);

let findProductById = (id) => {
  return Images.findOne({ productId: id })
    .then(data => {
      console.log('found the product in the table')
      return data;
    })
    .catch(err => console.log('err in finding the product', err));
}

module.exports.findProductById = findProductById;
module.exports.addOne = addOne;

