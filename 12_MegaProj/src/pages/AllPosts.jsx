import React, {useState, useEffect} from 'react'
// direct nhi milenge, useState , query krni padegi
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../component/index'

// 7:31:00
function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    // getPost me query pass krna hai, yaha jarurat nhi to nhi  kiya
    appwriteService.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
                {/* {posts.map((post) => (
                    <PostCard key={post.$id} post={post} />
                ))}     */}
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={posts.id} className='p-2 w-1/4'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
        </Container>
    </div>
  )
}

export default AllPosts