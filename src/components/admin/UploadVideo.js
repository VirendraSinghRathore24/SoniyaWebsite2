import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { db, storage } from '../../config/firebase';
import Spinner from '../Spinner';

const UploadVideo = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [url, setUrl] = useState('');
    const [isSubmit, setIsSubmit] = useState(true);
    const [docId, setDocId] = useState('');
    const [newFileUpload, setNewFileUpload] = useState(false);

    const [loading, setLoading] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleEdit = (p) => {

        setIsSubmit(false);
        setTitle(p.title);
        setDesc(p.desc);
        setSelectedFile(p.videoUrl);
        setUrl(p.url);
        setDocId(p.id);
    
        window.scroll(0,0);
      }

      const handleDelete = async(id) => {
        var res = window.confirm("Delete the item?");
        if (res) {
            const foodDoc = doc(db, "BookVideo", id);
            await deleteDoc(foodDoc);
    
            getVideo();
            clearData();
        } else {
          // Do nothing!
          console.log('Not deleted');
        }
      }
  const handleSubmit = async (e) => {
    try{
          setLoading(true);
          e.preventDefault();
         
            // new upload
             const videoRef = ref(storage, `videos/${selectedFile.name}`);
             await uploadBytes(videoRef, selectedFile)

             const videoUrl = await getDownloadURL(videoRef);

             addBookVideo(videoUrl);

          alert("Book Video Uploaded");

          clearData();
     

          setLoading(false);
    }
    catch(e)
    {
      console.log(e);
    }
  }

  const VideosCollectionRef = collection(db, "BookVideo");

  const addBookVideo = async (videoUrl) => 
  {
      try
      {
       
        
        await addDoc(VideosCollectionRef, {
          title : title, 
          desc : desc,
          url : url,
          videoUrl: videoUrl
        });
        getVideo();
      }
      catch(err) 
      {
        console.log(err);
      }
  }

 
  const handleUpdate =  async() => {
    try
    {
        setLoading(true);
        const bookDoc = doc(db, "BookVideo", docId);
        let imageUrl = selectedFile;

        if(newFileUpload)
        {
            const imageRef = ref(storage, `videos/${selectedFile.name}`);
            await uploadBytes(imageRef, selectedFile);

            imageUrl = await getDownloadURL(imageRef);
        }
        
        await updateDoc(bookDoc, {title : title, desc : desc, imageUrl: imageUrl, url: url });

        alert("Updated Successfully !!!");
        getVideo();
        clearData();

        setLoading(false);
      }
      catch(e)
      {
        console.log(e);
      }
  }

  const clearData = () => {
    setIsSubmit(true);
    setTitle('');
    setDesc('');
    setSelectedFile('');
    setUrl('');
    setNewFileUpload(false);
  }


  const getVideo = async() => {
    const data = await getDocs(VideosCollectionRef);
    const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

    setPosts(filteredData);
}

useEffect(() => {
    getVideo();
}, []);
  return (
    <div className='flex flex-col md:flex-row mb-4'>
        {
            loading ? (<Spinner/>) : (<div className='flex flex-col w-full mx-auto items-center p-8  gap-y-8'>
            <div className='flex gap-x-6 w-full md:w-8/12'>
              <h2 className='mt-1'>Title:</h2>
              <input required="true" type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Power of Book Writing ...' className='w-full rounded-lg px-2 py-1 border-2 border-blue-300 ml-12' />
            </div>
            <div className='flex gap-x-6 w-full md:w-8/12'>
              <h2>Amazon Link:</h2>
              <input type='text' placeholder='Enter Amazon Link ...' value={url} onChange={(e) => setUrl(e.target.value)}  className='w-full rounded-lg px-2 py-1 border-2 border-blue-300 ml-2'></input>
            </div>
            <div className='flex gap-x-6 w-full md:w-8/12'>
              <h2>Description:</h2>
              <textarea type='textarea' placeholder='Enter Description about post ...' value={desc} onChange={(e) => setDesc(e.target.value)}  className='w-full h-[250px] rounded-lg px-2 py-2 border-2 border-blue-300'></textarea>
            </div>
            
        <div className='flex gap-x-6 w-full md:w-8/12'>
            <h2>Upload Video:</h2>
              <input type="file"  onChange={handleFileChange} />
        </div>
        <div className='flex justify-end w-full md:w-8/12 mx-auto items-end'>
        {
            isSubmit ? (<button onClick={handleSubmit} className='bg-blue-600 rounded-lg px-5 py-1 text-white'>Submit</button>) 
                      : (<button onClick={handleUpdate} className='bg-yellow-600 rounded-lg px-5 py-1 text-white'>Update</button>)
        }
            
        </div>
    </div>)
        }
        <div className=' w-full md:w-8/12'>
            
            
                <div className="overflow-hidden mt-10">
       <table className="w-10/12 mx-auto overflow-y-scroll text-left text-sm font-light">
                
                <thead className="font-medium ">
                    <tr className='bg-orange-300 border-2 border-black text-blue-800 font-semibold text-md '>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">#</th>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">Title</th>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center ">Description</th>
                    <th scope="col" className="px-1 py-2  text-center border-r-2" >Edit</th>
                    <th scope="col" className="px-1 py-2 border-r-2 border-black text-center text-wrap" >Delete</th>
                    </tr>
                </thead>

                    <tbody>
                {
                    
                    posts.map((p, index) => (
                        
                        <tr className="border-2 border-black ">
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2  align-baseline text-center text-wrap">{index+1}</td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.title}</td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.desc.length > 15 ? p.desc.substring(0,15) + "..." : p.desc}</td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center">
                            <button onClick={() => handleEdit(p)} className='bg-blue-600 px-4 py-1 rounded-lg text-white'>Edit</button></td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center border-black">
                            <button onClick={() => handleDelete(p.id)} className='bg-red-600 px-4 py-1 rounded-lg text-white'>Delete</button>
                            </td>
                            
                        </tr>)
            )     
           } 
           </tbody> 
            
           </table>
       </div> 
         
        </div>
    </div>
    
  )
}

export default UploadVideo