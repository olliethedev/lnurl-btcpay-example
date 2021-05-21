import { expressSession } from 'next-session';

import connectMongo from 'connect-mongo';
const connectionSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferMaxEntries: 0,
  };

export default {
    store: new (connectMongo(expressSession))({
        url: process.env.MONGO_DB_URL,
        mongoOptions: connectionSettings
      }),
    autoCommit:false
  };
