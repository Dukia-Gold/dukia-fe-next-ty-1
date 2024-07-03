import { GetUrl } from '@/lib/getUrl';
import React from 'react'

const TopBar = () => {
    const pathname = GetUrl();

  return (
    <div className='py-2.5 bg-white border-b border-dukiaBlue/[10%] px-1.5 md:px-5 lg:px-10 font-extrabold text-3xl/10'>
        {pathname === "/dashboard" && <p>Dashboard</p>}
    </div>
  )
}

export default TopBar