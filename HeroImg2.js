import "./HerImg2styles.css"

import React, { useContext } from 'react'

function HeroImg2(props) {
  return (
    <div className="hero-img">
      <div className="heading">
        <h2>{props.value}</h2>
        <p>{props.comments}</p>
      </div>
    </div>
  )
}

export default HeroImg2


