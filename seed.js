const mockData = require('./client/src/dummyData.js');
const db = require('./database/index.js');

db.addOne(mockData)
  .then(console.log(mockData, 'data entered'))
  .catch(err => console.log(err, 'got error'));
