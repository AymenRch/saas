import React from 'react'
import { Star } from 'lucide-react'

const ReviewCard = (comment, name, abr, job) => {
    return (
        <>
            <div className="card-container">
                <div className='review-card'>
                <div className="starts">
                    <Star style={{ color: "yellow", fill: "yellow", size: "1.5rem" }} />
                    <Star style={{ color: "yellow", fill: "yellow", size: "1.5rem" }} />
                    <Star style={{ color: "yellow", fill: "yellow", size: "1.5rem" }} />
                    <Star style={{ color: "yellow", fill: "yellow", size: "1.5rem" }} />
                    <Star style={{ color: "yellow", fill: "yellow", size: "1.5rem" }} />
                </div>
                <p className='comment' style={{ fontSize: "1rem" }}>{comment}</p>
                    <div className="author">
                        <div className="avatar">{abr}</div>
                        <div style={{margin:"0",padding:"0"}}>
                            <div className="author-name">{name}</div>
                            <div className="author-role">{job}</div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
        .card-container{
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 8px;
        padding: 1rem;
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(8px);
        gap: 0;
        width: 30%;
        }
        .card-container:hover {
            background-color: rgba(255, 255, 255, 0.15);
          }
        .review-card{
        }
        .reviewer{
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
            gap: 1rem;
            border-top: 1px solid rgba(255,255,255,0.2);
            width: 100%;
        }

         .author {
            display: flex;
            align-items: center;
          }
          .avatar {
            width: 3rem; /* w-12 */
            height: 3rem; /* h-12 */
            background: linear-gradient(to right, #a855f7, #3b82f6); /* from-purple-500 to-blue-500 */
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            margin-right: 1rem;
          }
           .author-name {
            color: white;
            font-weight: 600;
            margin:0;
          }
          .author-role {
            color: rgba(255,255,255,0.6);
            margin:0;
          }
            
        `}
            </style>
        </>

    )
}

export default ReviewCard