import React, { useState } from 'react'
import {FcGoogle} from "react-icons/fc"
import { auth, db, googleProvider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const GetPDF = () => {
    const [formData, setFormData] = useState({
        name: "",
        email:""
    });

    const [isAdded, setIsAdded] = useState(false);

    function changeHandler(event){
        setFormData((prevData) =>(
        {
            ...prevData,
            [event.target.name] : event.target.value
        }))
    }

    const userCollectionRef = collection(db, "PdfUsers");

    const signInWithGoogle1 = async () => {
        try{
            await signInWithPopup(auth, googleProvider);

            await addDoc(userCollectionRef, {
                name : auth?.currentUser?.displayName,
                email : auth?.currentUser?.email,
                loginmode : 'Google'
              });

            setIsAdded(true);
        }
        catch(err){
            console.log(err);
        }
    };

    const handleSubmit = async(e) => {
        try{
            e.preventDefault();

            await addDoc(userCollectionRef, {
                name : formData.name,
                email : formData.email,
                loginmode : 'Manual'
              });

              setIsAdded(true);
        }
        catch(er)
        {
            console.log(er);
        }
    }
  return (
    <div className='m-20 w-10/12 md:w-3/12 mx-auto px-2'>
    {
        !isAdded ? (
            <div>
            <div className='text-xl font-bold text-center'>Free PDF Just One Click Away </div>

            <button className='w-full flex justify-center items-center rounded-[8px] text-lg text-richblack-700 border border-richblack-700
                px-[12px] py-[10px] gap-x-2 mt-6 bg-yellow-300 hover:bg-green-300' onClick={signInWithGoogle1}>
            <FcGoogle size={22}/>
                <p>Sign in with Google</p>
            </button>

            <div className='mt-4 text-lg py-1 text-center'>OR</div>

            <form onSubmit={handleSubmit}>
                <div className='mt-4 text-md py-1'>Name <sup className='text-red-500 text-lg'>*</sup></div>
                <input
                    className='border-2 rounded-md py-3 w-full px-2 text-md'
                    required
                    name='name'
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={changeHandler}
                />

                <div className='mt-4 text-md py-1'>Email <sup className='text-red-500 text-lg'>*</sup></div>
                <input
                    className='border-2 rounded-md py-3 w-full px-2 text-md'
                    required
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={changeHandler}
                />

                <button type='submit' className='bg-[#146eb4] px-6 py-2 text-white rounded-md text-lg mt-4 w-full'>Submit</button>
            </form>
        </div>
        ) : (
            <div className='flex flex-col items-center'>
            <h2 className='text-xl font-semibold'>Get Self-Forgiveness Prayer</h2>
            <div >
                <a 
                    href="/Self Forgiveness Prayer.png"
                    download="Self Forgiveness Prayer"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className='bg-[#146eb4] px-6 py-2 text-white rounded-md text-md md:text-lg mt-4 w-full'>Click here to Download the Prayer</button>
                </a>
            </div>
        </div>
        )
    }
      
        
    </div>
  )
}

export default GetPDF