import React from 'react'
import PoolAllocatedCalculator from '../PoolAllocatedCalculator'

const Hero = () => {
  return (
    <section className="min-h-screen pt-48 xl:pt-24 px-3 md:px-12 xl:px-28 py-4 flex flex-col gap-10 xl:flex-row xl:justify-between items-center bg-dukiaGrey">
        <div className='flex flex-col gap-6'>
            <div className='md:w-[33.875rem] flex flex-col gap-2 text-white'>
                <p className='font-extrabold text-4xl'>Dukia Gold is the Foremost & Largest Full-Service Bullion Dealer in Nigeria, West Africa</p>
                <p>Creating ease of access to investment grade gold & other precious metals in Nigeria via a safe and secure trading platform</p>
            </div>

            <div>
                <button className='bg-dukiaGold py-3 px-7 rounded-lg font-semibold text-sm text-dukiaBlue'>Buy Gold</button>
            </div>

            
        </div>

        <PoolAllocatedCalculator />
    </section>
  )
}

export default Hero