import { Client } from '@opensearch-project/opensearch';
import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();


const client = new Client({
  node: 'http://localhost:9200'
});

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {
  console.log('Creating index:');

  const index_name = 'books';
  const settings = {
    settings: {
      index: {
        number_of_shards: 4,
        number_of_replicas: 3,
      },
    },
  };

  const response = await client.indices.create({
    index: index_name,
    body: settings,
  });


  console.log(response.body);

  res.send('Welcome to Express & TypeScript Server!!!');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});