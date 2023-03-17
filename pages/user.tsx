

// pages/profile.js
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Modal from '../components/Modal';
import Form from '../components/Form';
import { CustomLink } from '../components';

type Props = {
  user: any,
}

export default withPageAuthRequired(function Profile({ user })   {
  const [isOpen, setIsOpen] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [filteredPosts, setFilteredPosts] = React.useState([]); // [1]
  const [learnMore, setLearnMore] = React.useState(false); // [1
  

  const handleMore = () => {
    setLearnMore(!learnMore);
  }
  const getPosts = async () => {
    //filter posts by authorId
    const res = await fetch('/api/blog/posts')
    if (res.status === 200) {
      const data = await res.json()
      setPosts(data)
    } else {
      console.log('error')
    }
  } 

  const handleOpenCreatePostModal = () => {
    setIsOpen(!isOpen);
  }

  React.useEffect(() => {
    getPosts()
  }, [user])

  React.useEffect(() => {
    const userSub = user?.sub
    const filteredPosts = posts.filter((post: any) => post.authorId === userSub)
    setFilteredPosts(filteredPosts)
  }, [posts])

  return (
    <>
      <div className="container">
        <div className="flex flex-col">
          <img className='rounded-full h-10 w-10' src={user.picture as string} alt={user.name as string} />
          <div className="flex flex-col">
            {
              user.name && <h2 className=' text-gray-900 title-font font-medium pb-2'>
                Name: <span className="text-gray-600">{user.name as string}</span>
              </h2>
            }
           {
              user.email && <h2 className=' text-gray-900 title-font font-medium pb-2'>
                Email: <span className="text-gray-600">{user.email as string}</span>
              </h2>
           }
           {
              user.nickname && <h2 className=' text-gray-900 title-font font-medium pb-2'>
                Nickname: <span className="text-gray-600">{user.nickname as string}</span>
              </h2>
           }
          </div>
        </div>
      </div>
      
      <button 
          onClick={handleOpenCreatePostModal}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ajouter un post
        </button>
        
      {
        isOpen &&
        <Modal 
          title="Ajouter un post"
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          content={
            <Form/>
          }
        >
        </Modal>
      }

        <>
        <h2 className='pt-4 text-gray-900 title-font font-medium pb-2'>
          Vos posts:
        </h2>

        <div className="flex flex-wrap -m-4">
          {
            filteredPosts.map((post: any) => (
              <div className="p-4 md:w-1/3">
               
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <CustomLink
                        href={`/blog/${post.id}`}
                        >
                          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                      </CustomLink>
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.author}</h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                          <p className="leading-relaxed mb-3">
                            {
                              learnMore ? post.content : post.content.substring(0, 100) + '...'
                            }
                          </p>
                          <div className="flex items-center flex-wrap ">
                          {
                            post.content.length > 100 && <button onClick={handleMore} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn more
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </button>
                          }
                            <button className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>1.2K
                            </button>
                            <button className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>6
                            </button>
                          </div>
                        </div>
                    </div>
              </div>
            ))
          }
        </div>
        </>
      
    </>
    
  )
});
