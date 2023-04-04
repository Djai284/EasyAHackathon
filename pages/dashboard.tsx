import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Dashboard, SidePanel } from '../components'

const DashboardPage: NextPage = () => {
  return (
    <div className='flex'>
      <SidePanel />
      <Dashboard />
    </div>

  )
}

export default DashboardPage