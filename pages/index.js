import Head from 'next/head'
import Image from 'next/image'
import { Dashboard, Login, Signup, HeroHome, Navbar, Footer } from '../components'
// import Header from '../components/partials/Header'
import GoogleButton from 'react-google-button'
import Landing from './landing'

const Home = () => {
  return (
    <div>
      <Landing />
      {/* <Dashboard />  */}
    </div>
  )
}

export default Home
