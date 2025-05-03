import React from 'react'
import { useNavigate } from 'react-router-dom'

const Review = () => {
  const navigate=useNavigate()
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          <div className="flex flex-col sm:flex-row p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            {/* Banner content */}
            <div className="md:w-4/5 text-center">
              <h2 className="md:text-6xl text-6xl font-bold mb-6 leading-relaxed">
                What is Ratings and Reviews?
              </h2>
              <p className="mb-8">
                With this feature, donors can provide feedback on the quality of
                their donation experience, including the ease of the donation
                process, the responsiveness of the platform, and the overall
                satisfaction with the service provided. By sharing their
                perspectives, donors not only contribute to improving our
                platform but also inspire trust among potential donors,
                encouraging greater participation and support for our cause. For
                recipients, the ratings and reviews function offers a valuable
                opportunity to express gratitude for received donations and
                provide feedback on their suitability and usefulness. This
                feedback loop enables us to continually improve the matching
                process, ensuring that donations meet the specific needs of
                recipients effectively. Furthermore, the ratings and reviews
                function serves as a tool for accountability, allowing users to
                identify and recognize exemplary contributions and flag any
                concerns or issues promptly. By promoting transparency and
                accountability, we strive to create a supportive and trustworthy
                environment where every donation makes a meaningful impact..
              </p>
            </div>

            {/* Banner image */}
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-8">
        <div className="w-full md:w-1/3">
          <div
            className="card-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://cf.ltkcdn.net/charity/images/std/254503-800x515r1-how-organize-food-drive.webp"
              alt="Card 3"
              className="card-image my-6"
            />
            <button onClick={()=>navigate('/feedback')} type="button" className='bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer'>
              Add Review for Event Page{" "}
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div
            className="card-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://img.freepik.com/premium-photo/friends-stacking-hands_1048944-18619391.jpg?w=996"
              alt="Card 3"
              className="card-image my-6"
            />
            <button onClick={()=>navigate('/feedback')} type="button" className='bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer'>
              Add Review for Community Post Page{" "}
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div
            className="card-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://localfoodbank.org/wp-content/uploads/2022/01/29139856-volunteers-sorting-donations.jpg"
              alt="Card 3"
              className="card-image my-6"
            />
            <button onClick={()=>navigate('/feedback')} type="button" className='bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer'>
              Add Review for Fund Raising Page{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review