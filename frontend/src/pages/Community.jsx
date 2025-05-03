import React from 'react'

const Community = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20'>
    <div>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
            <div className='flex flex-col sm:flex-row p-3 border border-primary justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
                {/* Banner content */}
                <div className='md:w-3/5 text-left'>
                    <h2 className='md:text-4xl text-4xl font-bold mb-6 leading-relaxed'>Uniting Communities, Nourishing Lives: Empowering India Fight Against Hunger"</h2>
                    <p className='mb-8'>Step into our world of compassion and action, where each click resonates with the heartbeat of humanity! Here at our Community Management platform in India, we're not just fighting hunger; we're sowing seeds of hope and weaving threads of unity in the fabric of our community. In a world where every meal is a lifeline, we stand as guardians of dignity and empathy. Through our innovative platform, we empower individuals and families grappling with food insecurity to tailor their needs, transforming mere requests into profound expressions of self-worth and resilience.</p>

                    <div className="flex gap-10 mb-8 justify-start">
                        <a  href="create-foodrequest">
                        <button type='button' className='bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer'>Send a Food Request</button>
                        </a>
                        <a href="/communitysearch">
                            <button type='button' className='bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer'>Find Recipients </button>
                        </a>
                        <a href="/shedules">
                            <button type='button' className='bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer'>Find Scheduled Donation Events</button>
                        </a>
                    </div>
                </div>
                
                {/* Banner image */}
                <div>
                    <img src="https://cafh.ca/wp-content/uploads/2023/08/494909426.jpg" className='lg:h-[300px]'/>
                </div>
            </div>
        </div>
    </div>

    <div className="flex gap-6 mt-8">
        <div className="w-full md:w-1/3">
          <div className="card-content">
            <img src="https://img.freepik.com/free-photo/smiley-female-volunteer-holding-box-with-food-donations_23-2148732644.jpg" alt="Card 1" className="card-image" />
            <h3 className="text-lg font-bold mb-2 mt-3 text-center"> What is Community?</h3>
            <p className='text-center'>Community refers to individuals in India facing food insecurity, including low-income families, the elderly, disabled, and orphanages. They come together on a centralized platform to request tailored food assistance, fostering solidarity and support among those experiencing similar challenges.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="card-content">
            <img src="https://img.freepik.com/free-photo/volunteers-using-laptop-prepare-food-donation-boxes_23-2148732719.jpg" alt="Card 2" className="card-image" />
            <h3 className="text-lg font-bold mb-2 mt-3 text-center">How it helps people in need of food?</h3>
            <p className='text-center'>The platform empowers individuals to customize food requests, ensuring their unique needs are met with dignity. Recipients maintain control, modifying requests as circumstances change. They receive timely updates on request status, enhancing transparency and trust while addressing food insecurity effectively.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="card-content">
            <img src="https://img.freepik.com/free-photo/side-view-volunteers-handling-boxes-with-food-donations_23-2148638012.jpg" alt="Card 3" className="card-image" />
            <h3 className="text-lg font-bold mb-2 mt-3 text-center">Are you a donor who is willing to support?</h3>
            <p className='text-center'>Join us in making a difference! Your contributions directly impact individuals in need of food assistance. Explore recipient profiles, filter by district or urgency, and align your donations with causes that resonate with you. Together, we can alleviate food insecurity and promote community resilience in India.</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Community