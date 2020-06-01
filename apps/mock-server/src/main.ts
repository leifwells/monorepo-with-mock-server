import * as path from 'path';
import * as jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'assets/data/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
