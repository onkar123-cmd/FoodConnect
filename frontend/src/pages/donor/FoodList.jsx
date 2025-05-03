import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const FoodList = ({url}) => {
  const [list,setList]=useState([])

  const fetchList=async()=>{
    const response=await axios.get(`${url}/api/food/list`)
    
    if(response.data.success){
      setList(response.data.data)
    }else{
      toast.error("Error")
    }
  }

const removeFood=async(foodId)=>{
    const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
        toast.success(response.data.message)
    }else{
        toast.error("Error")
    }
}

useEffect(()=>{
    fetchList()
},[])

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Food List</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Food</th>
                <th className="px-4 py-3 font-semibold truncate">Category</th>
                <th className="px-4 py-3 font-semibold truncate">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {list.map((item, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div className="border border-gray-300 rounded p-2">
                      <img src={`${url}/images/`+item.image} alt="Product" className="w-16" />
                    </div>
                    <span className="truncate max-sm:hidden w-full">{item.name}</span>
                  </td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">
                    <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>X</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FoodList