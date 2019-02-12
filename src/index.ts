import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import setupDb from './db';
import PageController from './pages/controller';
import UserController from './users/controller';

const port = process.env.PORT || 4000;

const app = createKoaServer({
  controllers: [PageController, UserController]
});

setupDb()
  .then(_ => app.listen(port, () => console.log('Listening on port 4000')))
  .catch(err => console.log(err));
