import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="flex gap-6 mt-8">
                <div className="w-full md:w-1/3">
                    <div className="card-content">
                        <img src="https://t3.ftcdn.net/jpg/04/96/08/02/360_F_496080280_i73DdGNGBWxi8vIeYTtd5htd8CGbtNn9.jpg" alt="Card 1" className="card-image" />
                        <h3 className="text-lg font-bold mb-2 mt-3 text-center">Our Mission</h3>
                        <p className='text-center'>Our mission at Foood Connect is to alleviate food insecurity and foster community by providing vital food support to individuals and families facing hunger in India. We aim to address the urgent need for nutritious meals, especially in vulnerable communities, through meaningful action and direct connections between those in need and generous donors.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="card-content">
                        <img src="https://t3.ftcdn.net/jpg/04/98/47/60/360_F_498476030_i2GPXTuynMyhDwWUQ9wsBofP5peZoo0h.jpg" alt="Card 2" className="card-image" />
                        <h3 className="text-lg font-bold mb-2 mt-3 text-center">Our Vision</h3>
                        <p className='text-center'>Our vision is to create a future where no one in India has to worry about where their next meal will come from. We envision a community where everyone has access to the nourishment they need to thrive, fostering resilience and well-being. Through collective action and support, we strive to build a stronger, more equitable society for all.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="card-content">
                        <img src="https://as2.ftcdn.net/v2/jpg/05/03/64/55/1000_F_503645509_UmG9HgW3DHNkaWVaTiOD1ukzYFHvu8Lg.jpg" alt="Card 3" className="card-image" />
                        <h3 className="text-lg font-bold mb-2 mt-3 text-center">Our Goal</h3>
                        <p className='text-center'>Our goal is to build a robust and sustainable platform that efficiently matches individuals experiencing food insecurity with donors eager to help. We aim to expand our reach and impact, ensuring that assistance reaches where it's needed most across India. By fostering a sense of community and collaboration, we aspire to make a lasting difference in the fight against hunger.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner