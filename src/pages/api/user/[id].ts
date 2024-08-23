import type { NextApiRequest, NextApiResponse } from 'next'
import { USERS } from '@/lib/mocks'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = parseInt(req.query.id as string);
  const user = USERS.find(user => user.id === id);

  res.status(200).json(!!user ? user : null)
}