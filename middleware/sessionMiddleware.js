import session from 'express-session';
import connectMongo from 'connect-mongo';

export default function sessionMiddleware(req, res, next) {
    if(req.dbClient){
        console.log("has dbclient")
    }
  const mongoStore = new (connectMongo(session))({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    secret: process.env.SESSION_SECRET,
    store: mongoStore,
  })(req, res, next);
}