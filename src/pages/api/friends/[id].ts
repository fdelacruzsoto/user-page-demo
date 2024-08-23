import type { NextApiRequest, NextApiResponse } from 'next'
import { FRIENDS } from '@/lib/mocks'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = parseInt(req.query.id as string);
  res.status(200).json(FRIENDS.find(friends => friends.id === id))
}