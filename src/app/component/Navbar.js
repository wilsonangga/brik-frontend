import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex flex-col w-60 bg-[#005299] gap-14 px-5 py-7'>
            <p className='font-semibold text-xl text-white'>Kelontong Store</p>
            <div>
                <div className='flex gap-1 items-center rounded-md bg-[#004580] px-3 py-2 cursor-pointer'>
                    <Image src="/product.svg" width={24} height={24} alt="product" />
                    <span className='text-sm font-semibold text-white'>Produk</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar