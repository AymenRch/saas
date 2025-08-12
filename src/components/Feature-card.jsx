import React from 'react'
import '../style/Features.css'

const FeatureCard = (title,icon,text) => {
  return (
    <div className='card'>
      <div className="title">
     {icon}
        <p style={{margin:"0",padding:"0",color:"white"}}>{title}</p>
      </div>
       
        <p style={{fontWeight:"400",margin:"0"}}>{text}</p>
    </div>
  )
}

export default FeatureCard