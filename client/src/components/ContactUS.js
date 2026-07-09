
import React, { useEffect, useState } from 'react';
// import baseUrl from '../baseUrl';
import { toast } from "react-toastify";

function ContactUS() {
  const [formData, setFormData] = useState({
    name: '',
    mobile : '',
    email: '',
    message: '',
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

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('mobile', formData.mobile);
    postData.append('email', formData.email);
    postData.append('message', formData.message);

    //axios.post(`${baseUrl}/contactuser`, formData);

    toast.success("Message Sent Successfully !!!");
    
    setFormData({
      name : "",
      moblie : "",
      email : "",
      message : ""
    })
  };

    useEffect(() => {
        window.scroll(0,0);
      }, []);

  return (
    <div className='font-mono'>
       <section class="" id="contact">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <h2
                    class="font-heading mb-4 font-bold tracking-tight text-blue-600  text-3xl sm:text-5xl">
                    Get In Touch
                </h2>
                
            </div>
        </div>
        <div class="flex items-stretch justify-center googlefontpoppins">
            <div class="grid md:grid-cols-2">
                <div class="h-full pr-6">
                    <p class="mt-3 mb-12 text-lg">
                    If you have any inquiries or feedback, please feel free to contact us through the following channels:
                    </p>
                    <ul class="mb-6 md:mb-0">
                        
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 ">Contact
                                </h3>
                                
                                <p class="">Email: inquiry@soniyapachauri.com</p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 class="mb-4 text-2xl font-bold">Send Message</h2>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" value={formData.name} onChange={handleInputChange} autocomplete="given-name" required="true" placeholder="Your name" class="mb-2 w-full rounded-md border py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="mobile" class="pb-1 text-xs uppercase tracking-wider"></label><input type="number" id="mobile" value={formData.mobile} onChange={handleInputChange} autocomplete="number"  required="true" placeholder="Your mobile number" class="mb-2 w-full rounded-md border py-2 pl-2 pr-4 shadow-md sm:mb-0" name="mobile"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" value={formData.email} onChange={handleInputChange} autocomplete="email"  required="true" placeholder="Your email address" class="mb-2 w-full rounded-md border py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="message" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="message" value={formData.message} onChange={handleInputChange} name="message" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border  py-2 pl-2 pr-4 shadow-md  sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default ContactUS