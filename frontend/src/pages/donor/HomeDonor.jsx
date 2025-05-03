import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeDonor = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome, Generous Donor!</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thank you for choosing to fight hunger and reduce food waste. Your donation can make a real difference.
        </p>
        <br />
        <div className='flex justify-center mb-6'>
          <img src="https://t4.ftcdn.net/jpg/04/98/47/53/360_F_498475327_1fHyorA3Pf0PVeOaIBc5XcjKvliiZCrs.jpg" alt="" className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 object-cover w-[400px] h-[300px]"/>
        </div>
        <button onClick={()=>navigate('/donor/add-food')} className="mt-6 bg-primary hover:bg-primary-dull text-white px-6 py-3 rounded-xl text-lg shadow-md">
          Donate Food Now
        </button>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Why Donate?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Reduce Food Waste</h3>
            <p>Unused food can feed someone in need instead of ending up in landfills.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Help Your Community</h3>
            <p>Support local food banks and shelters with your surplus food.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Feel Good</h3>
            <p>Making a difference has never been easier or more rewarding.</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Donation Guidelines</h2>
        <ul className="max-w-xl mx-auto list-disc list-inside text-gray-700 space-y-2">
          <li>Only donate fresh or properly packaged food.</li>
          <li>Ensure food is not expired.</li>
        </ul>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 FoodConnect. Every meal counts.
      </footer>
    </div>
  )
}

export default HomeDonor