import type { NextApiRequest, NextApiResponse } from 'next'
import { USERS } from '@/lib/mocks'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(USERS)
}