
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Blog() {

    const router = useRouter()
    const { user } = useUser();
    const { slug } = router.query
    const fetcher = (url: string) => fetch(url).then((res) => res.json())

    const { data, error } = useSWR(`/api/blog/${slug}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const checkUser = data.authorId === user?.sub;

    const editBlog = () => {
        router.push(`/blog/edit/${slug}`)
    }

    const deleteBlog = () => {
    
        const deleteBlog = async () => {
            const res = await fetch(`/api/blog/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    idToDelete: data.id,
                 }),

            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            router.push('/')
        }
        deleteBlog()
    }
    return (
     <div className="container">
      
        <div className="flex flex-col">

            <h1 className=' text-gray-900 title-font font-medium pb-2'>
                {data.title}
            </h1>

            <p className=' text-gray-900 title-font font-medium pb-2'>
                {data.content}
            </p>

            <p className=' text-gray-900 title-font font-medium pb-2'>
                {data.author}
            </p>
        </div>
        <div className='w-1/3'>
            {
                checkUser && (
                    <div className="flex flex-col">
                        <button
                        onClick={editBlog}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                        <button 
                        onClick={deleteBlog}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                    </div>
                )
            }
        </div>
      </div>
    )
}


