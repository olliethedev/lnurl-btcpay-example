import { withSession } from 'next-session';

const options = {}; //todo

function handler (req, res) {
  console.log(req.body);
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  res.status(200).json({ name: 'John Doe' })
}

export default withSession(handler, options);