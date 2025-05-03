import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const ViewReceivers = ({ url }) => {

  const [rlist, setRList] = useState([])

  const fetchRList = async () => {
    const response = await axios.get(`${url}/api/admin/rlist`)

    if (response.data.success) {
      setRList(response.data.data)
    } else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchRList()
  }, [])

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Receivers List</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Receiver Name</th>
                <th className="px-4 py-3 font-semibold truncate">Email</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {rlist.map((item, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <span className="truncate max-sm:hidden w-full">{item.name}</span>
                  </td>
                  <td className="px-4 py-3">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewReceivers