import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const ViewDonors = ({ url }) => {

    const [dlist, setDList] = useState([])

    const fetchDList = async () => {
        const response = await axios.get(`${url}/api/admin/dlist`)

        if (response.data.success) {
            setDList(response.data.data)
        } else {
            toast.error("Error")
        }
    }

    const removeDonor = async (donorId) => {
        const response = await axios.post(`${url}/api/admin/remove`, { id: donorId });
        await fetchDList();
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error("Error")
        }
    }

    useEffect(() => {
        fetchDList()
    }, [])

    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Donors List</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Donor Name</th>
                                <th className="px-4 py-3 font-semibold truncate">Email</th>
                                <th className="px-4 py-3 font-semibold truncate">Give Warning</th>
                                <th className="px-4 py-3 font-semibold truncate">Remove Donor</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {dlist.map((item, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <span className="truncate max-sm:hidden w-full">{item.name}</span>
                                    </td>
                                    <td className="px-4 py-3">{item.email}</td>
                                    <td className='px-4 py-3'>
                                        <button onClick={() => window.open(`https://mail.google.com/mail/?view=cm&to=${item.email}`, '_blank')} className='border-none py-3 px-0 rounded bg-[#ffe1e1] cursor-pointer text-[#454545]'>Warning!</button>
                                    </td>
                                    <td className="px-4 py-3">
                                        <p onClick={() => removeDonor(item._id)} className='cursor-pointer'>X</p>
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

export default ViewDonors