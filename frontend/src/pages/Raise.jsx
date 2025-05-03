import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Raise = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        donorName: '',
        deliveryDate: '',
        issue: '',
        contact: '',
        image: null
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const report = {
            ...formData,
            image: formData.image ? formData.image.name : null
        }
        console.log('Report Submitted:', report);
        alert("Report Submited")
        navigate('/myorders')
    }
    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Report Undelivered Food</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input type="text" name="orderId" placeholder="Donor Name" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
                <input type="date" name="deliveryDate" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
                <textarea name="issue" placeholder="Describe the issue..." className="w-full p-3 border rounded-lg" rows="4" onChange={handleChange} required />
                <div>
                    <label className="block mb-2 text-sm font-medium">ScreenShot as a prove</label>
                    <label htmlFor="image" className="cursor-pointer inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition">
                        Choose File
                    </label>
                    <input type="file" id="image" name="image" accept="image/*" className="hidden" onChange={handleChange}/>
                    {formData.image && (
                        <p className="mt-2 text-sm text-green-700">
                            Selected: {formData.image.name}
                        </p>
                    )}
                </div>
                <input type="text" name="contact" placeholder="Your Contact (optional)" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
                    Submit Report
                </button>
            </form>
        </div>
    )
}

export default Raise