import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner2 = () => {
    const navigate=useNavigate()
    return (
        <div className="flex gap-6 mt-8">
            <div className="w-full md:w-1/3">
                <div onClick={()=>navigate('/community')} className="card-content cursor-pointer">
                    <img src="https://img.freepik.com/premium-photo/volunteers-food-day-giving-out-donations_23-2148637964.jpg?w=360" alt="Card 1" className="card-image" />
                    <div className="text-center mb-6 mt-7">
                        <div className="text-2xl font-bold mb-6 mt-7">
                            Find Community
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/3">
                <div className="card-content cursor-pointer">
                    <img src="https://st3.depositphotos.com/3261171/16185/i/450/depositphotos_161855718-stock-photo-passionate-friendly-people-happy-doing.jpg" alt="Card 1" className="card-image" />
                    <div className="text-center mb-6 mt-7">
                        <div className="text-2xl font-bold mb-6 mt-7">
                            Start a Fundraise
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/3">
                <div onClick={()=>navigate('/volunteer')} className="card-content cursor-pointer">
                    <img src="https://img.freepik.com/premium-photo/volunteers-food-day-giving-out-donations_23-2148637964.jpg?size=626&ext=jpg" alt="Card 1" className="card-image" />
                    <div className="text-center mb-6 mt-7">
                        <div className="text-2xl font-bold mb-6 mt-7">
                            Be a Volunteer
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="w-full md:w-1/3">
                <div onClick={()=>navigate('/review')} className="card-content cursor-pointer">
                    <img src="https://www.shutterstock.com/image-photo/group-multiethnic-volunteers-putting-food-600nw-752375233.jpg" alt="Card 1" className="card-image" />
                    <div className="text-center mb-6 mt-7">
                        <div className="text-2xl font-bold mb-6 mt-7">
                            Rating & Reviews
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2