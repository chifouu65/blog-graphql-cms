import CustomLink from "./CustomLink"
import {AiOutlineArrowRight} from 'react-icons/ai'
import React from "react"

type post = {
    author: string,
    authorId: string,
    id: string,
    title: string,
    content: string,
    published: boolean,
}
type Props = {
    posts: post[],
    btn: any,
}

const CardAdmin = ({ posts, btn}: Props) => {
    const [learnMore, setLearnMore] = React.useState(false); // [1
  
    const handleMore = () => {
      setLearnMore(!learnMore);
    }

    
    return posts.map((post) => {
        return (
          <div className="p-4 md:w-1/3
          " key={post.id}>
               
               <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden 
                shadow-lg
               ">
                {
                    post.published ? (
                        <div className="flex justify-center py-2">
                            <p className="bg-green-500 text-white px-2 py-1 rounded-full">Published</p>
                        </div>
                    ) : (
                        <div className="flex justify-center py-2">
                            <p className="bg-red-500 text-white px-2 py-1 rounded-full">Not Published</p>
                        </div>
                    )
                }
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
    
        ) 
     
    })
}

export default CardAdmin