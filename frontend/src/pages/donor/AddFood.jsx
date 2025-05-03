import React, { useState } from 'react'
import { assets } from '../../assets1/assets1';
import axios from "axios"
import { toast } from 'react-toastify'

const AddFood = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    Dname: "",
    Dadd: "",
    name: "",
    description: "",
    category: "Select"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Dname", data.Dname)
    formData.append("Dadd", data.Dadd)
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
      setData({
        Dname: "",
        Dadd: "",
        name: "",
        description: "",
        category: "Select"
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <form onSubmit={onSubmitHandler} className="md:p-10 p-4 space-y-5 max-w-lg">
      <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="donor-name">Donor Name</label>
          <input name='Dname' onChange={onChangeHandler} value={data.Dname} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="donor-address">Donor Address</label>
          <input name='Dadd' onChange={onChangeHandler} value={data.Dadd} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
        </div>
        <div>
          <p className="text-base font-medium">Food Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <label htmlFor="image">
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
              <img className="max-w-24 cursor-pointer" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="uploadArea" width={100} height={100} />
            </label>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">Food Name</label>
          <input name='name' onChange={onChangeHandler} value={data.name} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-description">Food Description</label>
          <textarea name='description' onChange={onChangeHandler} value={data.description} id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">Category</label>
          <select name='category' onChange={onChangeHandler} id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
            <option value="Select">Select Category</option>
            <option value="Salad">Salad</option>
            <option value="Rice">Rice</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Bread">Bread</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <button type='submit' className="px-8 py-2.5 bg-primary text-white font-medium rounded cursor-pointer">ADD</button>
      </form>
    </div>
  )
}

export default AddFood