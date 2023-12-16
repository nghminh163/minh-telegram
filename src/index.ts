import express, { Router, json } from 'express';
import cors from 'cors';
import config from './config';
import pingRouter from '@routes/ping.route';
import webhookRouter from '@routes/webhook.route';


const { PORT } = config;
const app = express();

app.use(json());
app.use(cors());

async function main(port: number) {
  // Implement route
  app.use('/ping', pingRouter);
  app.use('/webhook', webhookRouter);
  // Listen port
  app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
  });
}

main(PORT);
