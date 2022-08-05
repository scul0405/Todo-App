import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Card from '../components/card/Card'
const Dashboard = () => {
  return (

    <div>
      <Navbar />
      <div className='px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Dashboard