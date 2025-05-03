import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {toast} from "react-toastify"
import axios from "axios"
import {assets} from '../../assets1/assets1'

const Orders = ({url}) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders=async()=>{
    const response=await axios.get(url+"/api/order/list")
    if(response.data.success){
      setOrders(response.data.data)
      console.log(response.data.data);
    }else{
      toast.error("Error")
    }
  }

  const statusHandler=async(event,orderId)=>{
    const response=await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])
  return (
    <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll'>
      <div className="md:p-10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Orders List</h2>
        {orders.map((order, index) => (
          <div key={index} className="flex flex-col md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300">
            <div className="flex gap-5 max-w-80">
              <img className="w-12 h-12 object-cover" src={assets.box_icon} alt="boxIcon" />
              <div>
                {order.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="font-medium">
                      {item.name} <span className="text-primary"> X {item.quantity}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm md:text-base text-black/60">
              <p className='text-black/80'>{order.address.firstName} {order.address.lastName}</p>
              <p>{order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.pincode}</p>
              <p></p>
              <p>{order.address.phone}</p>
            </div>
            
            <p>Items : {order.items.length}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Order Placed">Order Placed</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders