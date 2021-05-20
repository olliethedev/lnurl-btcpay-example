import { expressSession } from 'next-session';

import connectMongo from 'connect-mongo';

export default {
    store: new (connectMongo(expressSession))({
        url: process.env.MONGO_DB_URL,
      }),
  };
