import React from 'react'
import { HeroHome, Login, Signup,  } from '../components'
import Header from '../components/partials/Header'

const Landing = () => {
  return (
    <div>
      <Header />

      <HeroHome />
    </div>
  )
}

export default Landing