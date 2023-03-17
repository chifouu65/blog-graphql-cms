import {useState} from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Form() {
    
    const { user } = useUser();
    const [ error, setError ] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        published: true
    })

    const savePost = async (e: any) => {
        e.preventDefault()
        const { title, content, published } = formData
        setSuccess(null)
        if (!title || !content) {
          setError('Please enter a title and content')
          return
        } else {
          setError(null)
          const post = {
            title,
            content,
            published,
            author: user?.email,
            authorId: user?.sub
          } 
  
          try {
            const res = await fetch('/api/blog/posts', {
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(post)
            })
            const data = await res.json() 
  
            data && console.log(data)

            setSuccess('Post created successfully')
          } catch (error) {
              console.log(error)
              setError('Something went wrong')
          }
        }
      }

    return (
        <div >
            <form onSubmit={savePost}
              className='flex flex-col items-center justify-center w-full h-full'
            >
              {success && <p className='text-green-500'>{success}</p>}
              {error && <p className='text-red-500'>{error}</p>}
                    <h1 className='text-2xl font-bold mb-4'>Create a new post</h1>
                    <input 
                      className="bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                      type="text" placeholder="Title" name="title" onChange={e => setFormData({ ...formData, title: e.target.value })}
                    />
                    <textarea
                      className="bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                      placeholder="Content" name="content" onChange={e => setFormData({ ...formData, content: e.target.value })}
                    />
                    {/*boolean input true / false */}
                    <select name="published" onChange={e => setFormData({ ...formData, published: e.target.value === 'true' ? true : false })}>
                        <option value="true">Published</option>
                        <option value="false">Unpublished</option>
                    </select>
                    <button type="submit" className='
                        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                    '>
                        Save Post
                    </button>
            </form>
        </div>
    );
}
