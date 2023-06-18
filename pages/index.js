import Head from 'next/head'
import Image from 'next/image'
import { Dashboard, Login, Signup, HeroHome, Navbar, Footer } from '../components'
// import Header from '../components/partials/Header'
import GoogleButton from 'react-google-button'
import Landing from './landing'
import 'animate.css'

const Home = () => {

  return (
    <div>
      <Landing />
    </div>
  )
}

export default Home
