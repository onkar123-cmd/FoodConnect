import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const DonorLogin = ({ setShowLoginDonor }) => {
  const { isDonor, setIsDonor, navigate } = useContext(StoreContext)
  const { url, setToken } = useContext(StoreContext)
  const [state, setState] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (state === "login") {
      newUrl += "/api/donor/login"
    } else {
      newUrl += "/api/donor/register"
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLoginDonor(false)
      setIsDonor(true)
      navigate('/donor')
    } else {
      alert(response.data.message)
    }
  }

  useEffect(() => {
    if (isDonor) {
      navigate("/donor")
    }
  }, [isDonor])
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
      <p className="text-2xl font-medium m-auto">
        <span className="text-primary">Donor</span> {state === "login" ? "Login" : "Sign Up"}
      </p>
      {state === "register" && (
        <div className="w-full">
          <p>Name</p>
          <input name='name' onChange={onChangeHandler} value={data.name} placeholder="Enter your name" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text" required />
        </div>
      )}
      <div className="w-full ">
        <p>Email</p>
        <input name='email' onChange={onChangeHandler} value={data.email} placeholder="Enter your email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
      </div>
      <div className="w-full ">
        <p>Password</p>
        <input name='password' onChange={onChangeHandler} value={data.password} placeholder="Enter your password" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
      </div>
      {state === "register" ? (
        <p>
          Already have account? <span onClick={() => setState("login")} className="text-primary cursor-pointer">click here</span>
        </p>
      ) : (
        <p>
          Create an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer">click here</span>
        </p>
      )}
      <button type='submit' className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
        {state === "register" ? "Create Account" : "Login"}
      </button>
    </form>
  )
}

export default DonorLogin