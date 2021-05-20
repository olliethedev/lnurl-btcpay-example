import { expressSession, promisifyStore } from 'next-session';

import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(expressSession);

const MONGO_URL = process.env.MONGO_DB_URL;

export default {
    store: promisifyStore(new MongoStore({
        url: MONGO_URL,
      })),
  };
