import http from 'node:http';
import mongoose from 'mongoose';

import config from './config.js';
import app from './app.js';

async function main() {
  // db connection
  mongoose
    .connect(config.mongoURI)
    .then((conn) => console.log('connected to db'));

  // server
  const server = http.createServer(app);
  server.listen(
    config.port,
    console.log('server running on port ' + config.port)
  );
}

main().catch((err) => console.log(err));
