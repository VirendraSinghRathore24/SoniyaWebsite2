import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseUrl from '../baseUrl';
import { toast } from "react-toastify";
import { Link, useLocation } from 'react-router-dom';

function Hoponopono() {
  
  const [isFilled, setIsFilled] = useState(false);  

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
    session: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('mobile', formData.mobile);
    postData.append('email', formData.email);
    formData.message = 'NA';
    postData.append('message', formData.message);
    
    postData.append('session', 'Hooponopono');

    axios.post(`${baseUrl}/contactuser`, formData);
    axios.post(`${baseUrl}/sendemail`, formData);

    setIsFilled(true);

    setFormData({
      name : "",
      mobile : "",
      email : "",
      message : "",
      session : ""
    })
  }
  catch(err){
    toast.error(`Error occurred while adding contact details !!!`, {position: "top-center"});
    console.log(err);
 }
  };
    useEffect(() => {
        window.scroll(0,0);
      }, []);

  return (
    <div>
    {
        !isFilled ? (
            <div className='flex flex-wrap justify-evenly w-10/12 mx-auto '>
    <form onSubmit={handleSubmit}>
      <div className='gap-y-6 flex flex-col justify-center items-center p-5'>
           <h2 className="text-2xl mb-2">Fill basic details to get PDF :</h2>
            <div>
                <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" value={formData.name} onChange={handleInputChange} autocomplete="given-name" required="true" placeholder="Your name" className="mb-2 w-80 rounded-md border py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name"/>
            </div>
            <div >
                <label for="mobile" class="pb-1 text-xs uppercase tracking-wider"></label><input type="number" id="mobile" value={formData.mobile} onChange={handleInputChange} autocomplete="number"  required="true" placeholder="Your mobile number" class="mb-2 w-80 rounded-md border py-2 pl-2 pr-4 shadow-md sm:mb-0" name="mobile"/>
            </div>
            <div>
                <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" value={formData.email} onChange={handleInputChange} autocomplete="email"  required="true" placeholder="Your email address" class="mb-2 w-80 rounded-md border py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email"/>
            </div>
            <div>
                <button type="submit" class="w-80 bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Submit</button>
            </div>
      </div>
      </form>
    </div>
        ) : (
            <div className='py-4 mt-10 mb-10'>
                <div className='flex flex-col items-center googlefontpoppins'>
                    <h2 className='text-center p-4 text-3xl sm:text-4xl font-semibold text-blue-600'>Ho'oponopono & Forgiveness PDF</h2>
                    <div className='bg-blue-500 mt-8 p-2 text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                        <a 
                            href="/Hooponopono-Forgivenss.pdf"
                            download="Hooponopono-Forgivenss"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Click here to Download the PDF</button>
                        </a>
                    </div>
                    <Link to="https://www.instagram.com/soniyapachauri12/" target="_blank">
                        <div className='flex gap-x-1 bg-yellow-500 rounded-xl p-2 text-center mt-8 hover:scale-110 transition duration-300 ease-in'>
                        <button className=' text-black'> Follow me on Instagram</button>
                        <img src='../../images/instagramsvg.svg' alt='instagram' className='w-[25px] h-[25px]'/>
                        </div>
                    </Link> 
                </div>
        </div>
        )
    }
    
    </div>
  )
}

export default Hoponopono