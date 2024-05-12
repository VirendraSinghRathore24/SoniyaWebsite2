import React, { useEffect, useState } from 'react'
import baseUrl from '../../baseUrl';
import Spinner from '../Spinner';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import ReactModal from 'react-modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Contacts() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [replyMessage, setReplyMessage] = useState('');

    const contactCollectionRef = collection(db, "contact");

    async function fetchBlogsData(){
        setLoading(true);
        try{
  
            const data = await getDocs(contactCollectionRef);
            const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
           
            setPosts(filteredData);
        }
        catch(err){
          console.log(err);
        }
        setLoading(false);
      }

      const update = async (id) =>
      {
        const contactDoc = doc(db, "contact", id);
        await updateDoc(contactDoc, {isReplied : true});
    }

    const handleReply = (p) => {
      setName(p.name);
      setEmail(p.email);
      setMessage(p.message);
      setId(p.id);

      setIsOpen(true);
    }

    const handleSendEmail = () => {
      // send email
      try {
          setLoading(true);
          const postData = new FormData();
          postData.append('email', email);
          postData.append('message', message);
          postData.append('replymessage', replyMessage);

          update(id);
          axios.post(`${baseUrl}/sendemailtocontact`, postData);

          setIsOpen(false);
          setLoading(false);
         
          setReplyMessage('');

          toast.success(`Email sent to ${name} !!!`);
      }
      catch(ex){
          console.log(ex)
      }
    }

    useEffect(() => {
      
       const auth = localStorage.getItem("auth");

        if(auth !== "Logged In")
        {
          navigate("/admin/login");
        }
      
        window.scroll(0,0);
        fetchBlogsData();
      }, []);

  return (
    <div className='py-10 mb-40'>
       <p className='text-center text-2xl font-semibold text-blue-600'>Contact</p>
       <div className="overflow-hidden mt-10">
       <table className="w-10/12 mx-auto text-left text-sm font-light">
                
                <thead className="font-medium ">
                    <tr className='bg-orange-300 border-2 border-black text-blue-800 font-bold text-md md:text-xl '>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">#</th>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">Name</th>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center ">Mobile #</th>
                    <th scope="col" className="px-1 py-2  text-center border-r-2" >Email</th>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center text-wrap" >Message</th>
                    <th scope="col" className="px-1 py-2   text-center text-wrap" >Reply</th>
                    </tr>
                </thead>

                    <tbody>
                {
                    loading ? (<div className='ml-10 sm:ml-96 mt-10 sm:mt-20'><Spinner/> </div>) : (
                    posts.map((p, index) => (
                        
                        <tr className="border-2 border-black ">
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2  align-baseline text-center text-wrap">{index+1}</td>
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.name}</td>
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.mobile}</td>
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2 align-baseline text-center break-all text-wrap">{p.email}</td>
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap w-4/12">{p.message}</td>
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2 border-r-black align-baseline text-center text-wrap">
                             {
                              p.isReplied ? ( <button onClick={() => handleReply(p)} className='bg-gray-500 px-4 py-1 rounded-lg text-md'>Reply</button>) 
                              : ( <button onClick={() => handleReply(p)}  className='bg-green-500 px-4 py-1 rounded-lg text-md'>Reply</button>)
                             }
                            </td>
                        </tr>)
            ))      
           } 
           </tbody> 
            
           </table>
       </div> 
       <ReactModal isOpen={isOpen}
                    contentLabel="Example Modal"
                    onRequestClose={() => setIsOpen(false)} 
                    className='relative w-11/12 md:w-4/12 mx-auto flex flex-col shadow-lg rounded-lg items-center gap-y-4 p-4 mt-40 bg-gray-300 border-blue-600 border-2'>
                    <div className='flex justify-between text-2xl w-full'>
                        <div className='flex justify-center w-full'>
                          <div className='text-center font-bold text-blue-600'>Send Email</div>
                        </div>
                        
                    </div>
                    <div class="flex items-center mx-auto text-center border-t border-green-600 pt-4 w-full"></div>
                    <div className='flex justify-start gap-x-4 mt-[10px] w-full mx-auto'>
                        
                            <div className='text-lg text-richblack-700 '>Name :</div>
                            <div className='text-lg text-blue-600  ml-5'>{name}</div>
                           
                    </div>
                    <div className='flex justify-start gap-x-4  w-full mx-auto'>
                        
                        <div className='text-lg text-richblack-700  '>To :</div>
                        <div className='text-lg text-blue-600  ml-12'>{email}</div>
                </div>
                <div className='flex justify-start gap-x-4  w-full mx-auto'>
                        
                        <div className='text-lg text-richblack-700  '>Message :</div>
                        <div className='text-lg text-blue-600  '>{message}</div>
                   
                </div>
               
                <div className='flex flex-col justify-start gap-y-4 mt-[20px] w-full mx-auto'>
                <div className='font-semibold'>Enter Reply Message here :</div>
                  <textarea value={replyMessage} onChange={(e) => setReplyMessage(e.target.value)} type='textarea' placeholder='Enter Reply Message'  className='w-full h-[200px] rounded-lg p-2'></textarea>
                </div>
                <div className='flex justify-end w-full gap-x-4'>
                  <button onClick={() => setIsOpen(false)} className='text-lg bg-yellow-500 px-10 py-1 text-white rounded-lg'>Cancel</button>
                  <button onClick={handleSendEmail} className='text-lg bg-green-500 px-10 py-1 text-white rounded-lg'>Send</button>
                </div>
        </ReactModal>
    </div>
  )
}

export default Contacts