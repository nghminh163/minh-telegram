import 'dotenv/config';

export default {
  PORT: parseInt(process.env.PORT as string, 10) || 3000,
  MONGO_URI: process.env.MONGO_URI || '',
};
