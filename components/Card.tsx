import CustomLink from "./CustomLink"
import {AiOutlineArrowRight} from 'react-icons/ai'

type post = {
    author: string,
    authorId: string,
    id: string,
    title: string,
    content: string,
}
type Props = {
    posts: post[],
    btn: any,
}

const Card = ({ posts, btn}: Props) => {

    return posts.map((post) => (
        <div key={post.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href={post.id}>
                    <img className="rounded-t-lg" src={post.img} alt="" />
                </a>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {post.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                        {
                            post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content
                        }
                    </p>
                    <CustomLink href={`/blog/${post.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Read more
                        <AiOutlineArrowRight className="ml-2" />
                    </CustomLink>
                    {btn}
                </div>
            </div>
        </div>
    ))
}

export default Card