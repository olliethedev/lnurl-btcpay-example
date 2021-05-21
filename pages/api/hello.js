import NextConnect from "next-connect";

import appMiddleware from '../../middleware/appMiddleware';

export default NextConnect().use(appMiddleware).get((req, res) => {
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  res.status(200).json({ name: 'John Doe' })
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
    externalResolver: true,
  },
};