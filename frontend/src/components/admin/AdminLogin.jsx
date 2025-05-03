import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const AdminLogin = ({setShowLoginAdmin}) => {
    const { isAdmin, setIsAdmin, navigate, url } = useContext(StoreContext)
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault()
            const response=await axios.post(url+'/api/admin/login', {email, password})
            if(response.data.success){
                setShowLoginAdmin(false)
                setIsAdmin(true)
                navigate('/admin')
            }else{
                alert(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (isAdmin) {
            navigate('/admin')
        }
    }, [isAdmin])
    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-primary">Admin</span> Login
            </p>
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter your email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter your password" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
            </div>
            <button type='submit' className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
                Login
            </button>
        </form>
    )
}

export default AdminLogin