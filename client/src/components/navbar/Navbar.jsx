import React from 'react'
import Logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import Happy from '../../assets/happy.svg'
import Logout from '../../assets/log-out.svg'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'
const Navbar = () => {
    const {authState: {currentUser}} = useContext(AuthContext)
  return (
    <nav className='nav-bar bg-blue-50 w-full h-20 flex items-center justify-between px-4 md:px-8'>
        <Link className=' w-14 h-14' to='/dashboard'>
            <img className='w-full h-full' src={Logo} alt="logo" />
        </Link>
        <div className=' h-14 w-80 lg:w-1/3 rounded-full bg-white flex justify-between items-center px-4 lg:px-6'>
            <div className='text-md text-gray-600'>
                <p>{`Hey ${currentUser.username}, how are you today ?`}</p>
                <p className='hidden md:block'>Wish you have a nice day !</p>
            </div>
            <div className='w-8 h-8 hover:bg-yellow-200'>
                <img className='fill' src={Happy} alt="happy" />
            </div>
        </div>
        <div className='w-8 h-8 cursor-pointer'>
            <img className='w-full h-full' src={Logout} alt="Logout" />
        </div>
    </nav>
  )
}

export default Navbar