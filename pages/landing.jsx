import React from 'react'
import { HeroHome, Login, Signup, } from '../components'
import Header from '../components/partials/Header'
import 'animate.css'
import styleToObject from 'style-to-object'


const Landing = () => {
  const widgetStyle = styleToObject('--chat-widget-primary-color: #F97316; --chat-widget-active-color:#F97316 ;--chat-widget-bubble-color: #F97316');

  return (
    <div className="bg-cover bg-center bg-white">
      <Header />
      <HeroHome />
      {/* <chat-widget
        style={widgetStyle}
        location-id="XCFWdJWtDS5XTgb0W7Ua"
        use-email-field="true"
        prompt-avatar="profile.jpg"
        agency-name="Solis Machines"
        agency-website="www.solismachines.com" >
      </chat-widget>
      <script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" > </script> */}
    </div>
  )
}

export default Landing