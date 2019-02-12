import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import PageController from './pages/controller';
import setupDb from './db';

// const port = process.env.PORT || 4000;

const app = createKoaServer({
  controllers: [PageController]
});

// app.listen(port, () => console.log(`Listening on port ${port}`));

setupDb()
  .then(_ => app.listen(4000, () => console.log('Listening on port 4000')))
  .catch(err => console.log(err));
