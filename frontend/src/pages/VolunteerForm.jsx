import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VolunteerForm = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        availability: '',
        skills: '',
        motivation: ''
    })

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Volunteer Data Submitted:", formData)
        alert("Volunteer Data Submitted")
        navigate('/volunteer')
    }

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Volunteer Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input type="text" name="fullName" placeholder="Full Name" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                <select name="availability" className="w-full p-3 border rounded-lg" onChange={handleChange} required>
                    <option value="">Select Availability</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Flexible">Flexible</option>
                </select>
                <input type="text" name="skills" placeholder="Skills / Interests" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                <textarea name="motivation" placeholder="Why do you want to volunteer?" className="w-full p-3 border rounded-lg" rows="4" onChange={handleChange}></textarea>
                <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dull transition">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default VolunteerForm