import { initMongoConnection } from '.initMongoConnection.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMongoConnection();
  startServer();
};

bootstrap();