import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  url: process.env.MONGODB_URL,
  databse: process.env.MONGODB_DATABASE,
}));
