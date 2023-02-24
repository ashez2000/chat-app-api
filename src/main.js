import http from 'node:http';
import config from './config.js';
import app from './app.js';

async function main() {
  const server = http.createServer(app);
  server.listen(
    config.port,
    console.log('server running on port ' + config.port)
  );
}

main().catch((err) => console.log(err));
