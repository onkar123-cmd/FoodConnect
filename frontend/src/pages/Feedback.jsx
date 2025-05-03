import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Feedback = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        donorName: '',
        rating: '',
        feedback: '',
        submittedBy: '',
        date: new Date().toISOString().slice(0, 10)
    })

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback Submitted:', formData);
        alert("Feedback Submited")
        navigate('/review')
    }
    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Donor Feedback Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input type="text" name="donorName" placeholder="Donor's Name" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
                <select name="rating" className="w-full p-3 border rounded-lg" onChange={handleChange} required>
                    <option value="">Rate the Donor (1-5)</option>
                    <option value="1">1 - Very Poor</option>
                    <option value="2">2 - Poor</option>
                    <option value="3">3 - Average</option>
                    <option value="4">4 - Good</option>
                    <option value="5">5 - Excellent</option>
                </select>
                <textarea name="feedback" placeholder="Your feedback..." className="w-full p-3 border rounded-lg" rows="4" onChange={handleChange} required />
                <input type="text" name="submittedBy" placeholder="Your Name (optional)" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                <input type="date" name="date" value={formData.date} className="w-full p-3 border rounded-lg bg-gray-100" readOnly />
                <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dull transition">
                    Submit Feedback
                </button>
            </form>
        </div>
    )
}

export default Feedback