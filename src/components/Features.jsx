import React from 'react'
import '../style/Features.css'
import FeatureCard from './Feature-card'
import { Code, Palette, Globe, Shield, Zap, Users } from 'lucide-react'

const Features = () => {
  return (
    <div className='features-container'>
        <h2>Everything You Need to <span>Shine Online</span> </h2>
        <p>Powerful features designed to help you create, customize, and share your portfolio with the world.</p>
        <div className="features-cards">
            {FeatureCard("Customizable Templates", <Palette style={{ color: "#a78bfa", size: "2rem" }} />, "Choose from a variety of stunning templates that you can easily customize to match your style.")}
            {FeatureCard("Responsive Design", <Code style={{ color: "#a78bfa", size: "2rem" }} />, "Your portfolio will look great on any device, ensuring a seamless experience for your visitors.")}
            {FeatureCard("Customizable Templates", <Globe style={{ color: "#a78bfa", size: "2rem" }} />, "Choose from a variety of stunning templates that you can easily customize to match your style.")}
            {FeatureCard("Easy to Use", <Zap style={{ color: "#a78bfa", size: "2rem" }} />, "No coding skills required! Our intuitive editor makes it easy to create and manage your portfolio.")}
            {FeatureCard("SEO Optimized", <Shield style={{ color: "#a78bfa", size: "2rem" }} />, "Built-in SEO features to help your portfolio rank higher in search results and attract more visitors.")}
            {FeatureCard("Easy to Use", <Users style={{ color: "#a78bfa", size: "2rem" }} />, "No coding skills required! Our intuitive editor makes it easy to create and manage your portfolio.")}
        </div>
    </div>
  )
}

export default Features