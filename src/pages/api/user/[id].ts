import type { NextApiRequest, NextApiResponse } from 'next'
import { USERS } from '@/lib/mocks'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = parseInt(req.query.id as string);
  res.status(200).json(USERS.find(user => user.id === id))
}