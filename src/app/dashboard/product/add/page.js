import React from 'react'
import Navbar from '@/app/component/Navbar'
import AddProduct from '@/app/component/AddProduct'
import Header from '@/app/component/Header'

const page = () => {
    return (
        <div className='flex min-h-screen bg-[#F8F9FC]'>
            <Navbar />
            <div className="w-full">
                <Header />
                <AddProduct />
            </div>
        </div>
    )
}

export default page