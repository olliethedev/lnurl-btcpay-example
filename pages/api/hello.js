
export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
    externalResolver: true,
  },
};