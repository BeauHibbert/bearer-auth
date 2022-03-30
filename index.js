'use strict'

const { server } = require('./src/server.js');
const { db } = require('./src/auth/models/index.js');

db.sync()
.then(() => {
  server.listen(3000, () => console.log('server up on 3000'));
}).catch(e => {
  console.error('Error starting server', e.message);
})