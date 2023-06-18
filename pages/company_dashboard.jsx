import React from 'react'
import { CompanyDashboard, CompanySidePanel } from '../components'

const company_dashboard = () => {
  return (
    <div className='flex flex-row'>
      <CompanySidePanel />
      <CompanyDashboard />
    </div>
  )
}

export default company_dashboard