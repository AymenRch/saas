import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height: "5vh", display: "flex", alignItems: "center", justifyContent: "space-between",position:"fixed",zIndex:"10",width:"100vw",padding:"1rem",borderBottom:"1px solid white",backdropFilter:"blur(8px)",WebkitBackdropFilter: "blur(8px)",background: "rgba(255, 255, 255, 0.1)" }}>
            <h2 style={{fontSize:"2rem"}}><span>PortfolioForge</span></h2>
            <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: "50px",  direction: "none" }}>
                <li><a href="#feature">Features</a></li>
                <li><Link to="/">Templates</Link></li>
                <li><Link to="/">Pricing</Link></li>
            </ul>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: "20px",marginRight:"50px" }}>
                <button onClick={()=>{navigate('/login')}} className='btn' style={{fontSize:"1rem"}}>Sign In </button>
                <button className='btn btn2'  style={{fontSize:"1rem"}}>Explore Templates </button>
            </div>
        </div>
    )
}

export default NavBar