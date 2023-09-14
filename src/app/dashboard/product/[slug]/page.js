import React from 'react'
import Navbar from '@/app/component/Navbar'
import Header from '@/app/component/Header'
import ViewProduct from '@/app/component/ViewProduct'

const Page = () => {
    return (
        <div className='flex min-h-screen bg-[#F8F9FC]'>
            <Navbar />
            <div className="w-full">
                <Header />
                <ViewProduct />
            </div>
        </div>
    )
}

export default Page