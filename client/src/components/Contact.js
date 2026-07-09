import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseUrl from '../baseUrl';
import { toast } from "react-toastify";
import { useLocation } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

function Contact() 
{
  const location = useLocation();
  const session = location.search.split("?").at(-1);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const contactCollectionRef = collection(db, "contact");
  
  const addContactData = async () => 
  {
      try
      {
        await addDoc(contactCollectionRef, {
          name: formData.name, 
          mobile : formData.mobile, 
          email: formData.email, 
          message: formData.message,
          isReplied:false
        });
      }
      catch(err) 
      {
        console.log(err);
      }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
    // const postData = new FormData();
    // postData.append('name', formData.name);
    // postData.append('mobile', formData.mobile);
    // postData.append('email', formData.email);
    // postData.append('message', formData.message);
    // postData.append('session', 'Contact Us');

    addContactData();

    //axios.post(`${baseUrl}/contactuser`, formData);
    //axios.post(`${baseUrl}/sendemail`, formData);
    
    toast.success(`Thank you ${formData.name} for your details, We will get back to you soon, Stay connected !!!`, {position: "top-center"});

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
  <div className='flex justify-center items-center font-heading mb-4 font-semibold tracking-tight text-blue-600 mt-8 text-3xl sm:text-5xl'>Get In Touch</div>
    <div className='flex flex-wrap justify-evenly w-10/12 mx-auto '>
    <form onSubmit={handleSubmit}>
      <div className='gap-y-6 flex flex-col justify-center items-center p-5'>
           <h2 className="text-2xl mb-2">Send your contact details :</h2>
           
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
                <label for="message" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="message" value={formData.message} onChange={handleInputChange} name="message" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-80 rounded-md border py-2 pl-2 pr-4 shadow-md  sm:mb-0"></textarea>
            </div>
            {/* <div className='text-md'>Disclaimer : You will receive a call shortly !!!</div> */}
            <div>
                <button type="submit" class="w-80 bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Submit</button>
            </div>
            
      </div>
      </form>
      <div>
        <img src='../../images/contact.png' loading='lazy' alt='profile' className='w-[400px] h-[400px] rounded-xl mt-20 mb-10'/>
      </div>
    </div>
  </div>
    )
}

export default Contact