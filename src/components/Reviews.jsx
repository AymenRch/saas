import React from 'react'
import ReviewCard from './ReviewCard'
import '../style/Features.css'

const Reviews = () => {
    return (
        <>
            <div className="reviews-container">
            <h2>
              Trusted by
              <span className="gradient-text"> Thousands</span>
            </h2>
            <p>Join the community of creators who chose PortfolioForge</p>
            <div className="reviews-cards">
                {ReviewCard("Amazing platform! It made building my portfolio so easy and fun.", "John Doe", "JD", "Web Developer")}
                {ReviewCard("Amazing platform! It made building my portfolio so easy and fun.", "John Doe", "JD", "Web Developer")}
                {ReviewCard("Amazing platform! It made building my portfolio so easy and fun.", "John Doe", "JD", "Web Developer")}

            </div>

            </div>
         <style>
            {`
            .reviews-container{
               display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
            }
             h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }
            .reviews-cards{
                display: flex;
                gap: 1rem;
                justify-content: start;
                max-width: 1200px;
                width: 100%;
            }
            `}
        </style>
        </>
    )
}

export default Reviews