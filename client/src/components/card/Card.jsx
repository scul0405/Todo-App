import React from 'react'
import trashBin from '../../assets/trash-bin.svg'
import pen from '../../assets/pen.svg'

const Card = () => {
  return (
    <div className='w-full border-2 border-r-8 border-green-300 rounded-lg bg-green-50'>
        <div className='py-2 px-4'>
            <div className='mb-2'>
                <p className='text-green-600 text-2xl font-bold mb-2'>Learn Abc</p>
                <p>Learning how to make an abc like ahfioawjefij nawfnioajwfieji jieoj aweijfojo janknejij nnzjoej jojane ...</p>
            </div>
            <div className='icon-box flex justify-between'>
                <div className='flex items-center'>
                    <div className='h-2 w-2 rounded-lg bg-green-700 mr-1'>
                    </div>
                    <span className='text-sm font-extrabold text-cyan-600'>
                        DOING
                    </span>
                </div>
                <div className='flex mr-8'>
                    <div className='w-6 h-6 mr-6 cursor-pointer'>
                        <img src={pen} alt="change" />
                    </div>
                    <div className='w-6 h-6 cursor-pointer'>
                        <img src={trashBin} alt="delete" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card