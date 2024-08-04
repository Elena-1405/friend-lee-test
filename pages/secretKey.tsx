import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { key } = req.query;

  if (typeof key !== 'string') {
    res.status(400).json({ error: 'Key is required and must be a string' });
    return;
  }

  res.setHeader('Set-Cookie', key=${key}; Path=/; HttpOnly);
  res.redirect('/');
};