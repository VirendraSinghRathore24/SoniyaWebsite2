import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../config/firebase';
import ReactPlayer from 'react-player';

const Book = () => {
    const [post, setPost] = useState([]);
    const playerRef = useRef(null);

    const VideosCollectionRef = collection(db, "BookVideo");
    const getVideo = async() => {
        const data = await getDocs(VideosCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
       
        console.log(filteredData[0])
        setPost(filteredData[0]);
    }

    useEffect(() => {
        // get post
        getVideo();
    }, [])
  return (
    // <div>
    //     <div className='text-3xl leading-12 mx-auto flex flex-wrap justify-center text-left w-10/12 fontcolor font-semibold '>{post.title}</div>
    //     <div className='flex flex-wrap w-8/12 justify-evenly gap-y-6 mx-auto mt-2'>
    //     <div className='flex flex-col lg:w-8/12 xs:w-screen items-start'>
    //         <div className='flex flex-col lg:w-8/12 xs:w-screen items-start'>{post.desc}</div>
    //         </div>
    //         <div className='w-[80px] h-[390px] rounded-xl mb-8 mt-10'>
    //             <ReactPlayer ref={playerRef} url={post.videoUrl} controls={true} width={500} height={400} />
    //         </div>
    //     </div>
    // </div>
    <div>
    {
        post && (<div>
            <div className='text-4xl leading-12 mx-auto flex flex-wrap justify-center text-left w-10/12 fontcolor font-semibold text-orange-300'>{post.title}</div>
        <div className='flex flex-wrap w-10/12 justify-evenly gap-y-6 mx-auto mt-8'>
            <div className='flex flex-col lg:w-5/12 xs:w-screen items-start'>
                
                <div className='text-left leading-12 googlefontpoppins text-white text-xl'>{post.desc}</div>
                 <div className='flex justify-center mt-2 items-center w-full mx-auto hover:scale-110 transition duration-300 ease-in' to={'https://www.amazon.in/Change-Your-Whole-Life-Writing/dp/B0CLTZ81QH'} target='_blank'>
                    <button className='bg-yellow-500  rounded-lg w-[150px] h-10 googlefontpoppins text-xl'>Buy Now</button>
                </div>
            </div>
            <div >
                 <ReactPlayer ref={playerRef} url={post.videoUrl} controls={true} width={520} height={360} playing={true} muted={true} />
         </div>
        </div>
        </div>)
    }
       
        </div>
        
  )
}

export default Book