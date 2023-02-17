import React from 'react'
import Resume from "./images/Sukalyan_Resume.pdf";
const Career = () => {
  return (
    <div>
      <div className='CV'>
            <a href={Resume} download class="btn btn1">Download CV</a>
            <p><i class="fa-solid fa-heart"></i>Copyright @Roy</p>
          </div>
    </div>
  )
}

export default Career
