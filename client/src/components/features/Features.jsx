import React from 'react'

const Features = () => {
  return (
    <div className='mx-6 p-4 mt-4 bg-red-50 flex justify-between'>
        <div>
            Sort By
            <div className='flex'>
                <span>
                    Status
                </span>
                <span>Create At</span>
            </div>
        </div>
        <div className='md:flex'>
            Page 1/50
            <div className='flex justify-evenly'>
                <button>{'<'}</button>
                <button>{'>'}</button>
            </div>
        </div>
    </div>
  )
}

export default Features