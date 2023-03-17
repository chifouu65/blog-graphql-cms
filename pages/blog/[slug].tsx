
import { GetStaticPaths, GetStaticProps } from 'next'
import { PrismaClient } from '@prisma/client'
import Head from 'next/head'

type Blog = {
    id: string
    title: string
    slug: string
    content: string
    author: string
    createdAt: Date
    updatedAt: Date
}

type Props = {
    blog: Blog
}


export default function Blog({ blog }: Props) {
   
    const { title, content, author } = blog
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content="/images/og-image.png" />
        </Head>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-gray-500 font-bold">Author: 
                        <span className="text-gray-700 font-normal"> {author}</span>
                    </p>
                </div>
                <div className="col-span-1">
                    <div className="prose">
                        <div dangerouslySetInnerHTML={{ __html: 
                            content
                        }} />
                    </div>
                </div>
            </div>
        </div>

        <style jsx>
        {`
            .container {
                max-width: 800px;
                margin: 0 auto;
            }

        `}
        </style>

        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = await new PrismaClient().post.findMany()
    
    const paths = blogs.map((blog) => ({
        params: { slug: blog.id.toString() },
    }))
    
    return { paths, fallback: false }
}

type Params = {
    slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug } = params as Params

    const blog = await new PrismaClient().post.findFirst({
        where: {
            id: slug,
        },
    })

    return { props: { blog } }
}
