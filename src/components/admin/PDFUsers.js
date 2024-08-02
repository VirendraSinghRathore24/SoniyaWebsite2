import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase';
import Spinner from '../Spinner';

const PDFUsers = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const userCollectionRef = collection(db, "PdfUsers");

    const getCategory = async () => {
        try{
            setLoading(true);

            const data = await getDocs(userCollectionRef);
            const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

            setPosts(filteredData);

            setLoading(false);
        }
        catch(err){
            console.log(err);
        }
    } 

    useEffect(()=> {
        getCategory();
    },[]);

  return (
    <div className='bg-gray-50 w-full'>   
            
            <div className='flex-col justify-between items-center mx-auto shadow-sm w-full md:w-9/12 p-2'>
            <div className='text-xl font-semibold'>PDF Users List</div>
            <div className='text-gray-600'>People who downloaded Hoponopono Prayer PDF</div>
                <div></div>
                {
                    loading ? <Spinner/> :  (
             <div className=''>
                <div className=' bg-white w-[100%] my-10 mt-4'>
                <div className=' w-full'>
                    <div className="max-h-[600px] my-auto px-4 overflow-y-scroll mb-20">
                    <table className="w-full mx-auto overflow-y-scroll text-left text-sm font-light my-2">
                    <thead className="font-medium ">
                        <tr className='bg-gray-100 rounded-md font-semibold text-lg'>
                            <th scope="col" className="px-1 py-2 border-r-2 text-center">#</th>
                            <th scope="col" className="px-1 py-2 border-r-2 text-center">Name</th>
                            <th scope="col" className="px-1 py-2  text-center border-r-2" >Email</th>
                        </tr>
                    </thead>
                    <tbody className='py-4'>
                    {
                    
                        posts.length > 0 && posts.map((p, index) => (
                        <tr className="border-2  ">
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2  align-baseline text-center text-wrap">{index+1}</td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.name}</td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.email}</td>
                        </tr>))     
                    } 
                    </tbody> 
                </table>
            </div>  
        </div>
                </div>
                </div>
            ) 
        }
            </div>
            </div>
           
  )
}

export default PDFUsers