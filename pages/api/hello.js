import {  withSession } from 'next-session';

import options from '../../constants/sessionConfig';

function handler (req, res) {
  console.log(req.body);
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  res.status(200).json({ name: 'John Doe' })
}

export default withSession(handler, options);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
    externalResolver: true,
  },
};