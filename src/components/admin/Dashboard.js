import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if(auth !== "Logged In")
    {
      navigate("/admin/login");
    }
  }, []);
  return (
    <div className='p-10 flex flex-col gap-y-6'>
        <div className='text-2xl font-semibold text-center'>Admin Dashboard</div>
        <Link className='text-blue-600 text-lg underline' to={'/admin/affimationusers'}>Affirmation PDF Users List</Link>
        <Link className='text-blue-600 text-lg underline' to={'/admin/pdfusers'}>PDF Users List</Link>
        <Link className='text-blue-600 text-lg underline' to={'/admin/contacts'}>Reply to all contacts</Link>
        <Link className='text-blue-600 text-lg underline' to={'/admin/uploadvideo'}>Upload Book Video</Link>
    </div>
  )
}

export default Dashboard