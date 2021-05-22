import NextConnect from "next-connect";

import sessionMiddleware from "./sessionMiddleware";
import mongoMiddleware from "./mongoMiddleware";

export default NextConnect()
    .use(mongoMiddleware)
    .use(sessionMiddleware);
