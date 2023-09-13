import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import ProductList from '../component/ProductList'

const Dashboard = () => {
    return (
        <div className='flex min-h-screen bg-[#F8F9FC]'>
            <Navbar />
            <div className='w-full'>
                <Header />
                <ProductList />
            </div>
        </div>
    )
}

export default Dashboard