// require('dotenv').config();
const http = require('http');
const app = require('./app');


const server = http.createServer(app);





server.listen(5000, () => {
  console.log(`Server is listening now on port 5000`);
});