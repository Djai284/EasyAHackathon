import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Dashboard, SidePanel } from '../components'
import { app } from '../components/firebaseConfig'
import { collection, query, getDocs, getFirestore, doc, getDoc, Timestamp, DocumentData } from 'firebase/firestore'

const db = getFirestore(app)

const DashboardPage = () => {
  return (
    <div className='flex flex-row'>
      <SidePanel />
      <Dashboard />
    </div>

  )
}

export default DashboardPage

