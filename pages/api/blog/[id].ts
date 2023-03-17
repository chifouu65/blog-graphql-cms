import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    
    console.log(id)
    if (id) {
        prisma.post.findUnique({
            where: {
                id: id as string,
            },
        })
        .then((data) => {
            res.status(200).json(data as any);
        })
        .catch((err) => {
            res.status(500).json(err as any);
        });
      } else {
        res.status(405).json('Method not allowed' as any);
      }
}

    