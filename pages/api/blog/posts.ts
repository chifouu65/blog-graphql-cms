import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

type Data = {
    name: string
}

export default async( req: NextApiRequest,
    res: NextApiResponse<Data>) => {

        //get all posts
    if (req.method === 'GET') {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts as any);
        
        //create a post
    } else if (req.method === 'POST') {
        console.log('POST');
        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                published: req.body.published,
                author: req.body.author,
                authorId: req.body.authorId,
            },
        });
        res.status(200).json(post as any);
    } 
}


