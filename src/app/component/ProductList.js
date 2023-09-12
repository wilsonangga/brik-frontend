import React from 'react'
import Image from 'next/image'

const ProductList = () => {
    return (
        <div className='pl-6 pr-10 py-10'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold'>Produk</h1>
                <button className='bg-[#008CFF] rounded-lg py-3 w-40 text-sm font-semibold text-white'>Tambah</button>
            </div>

            <div className="flex gap-4 mt-7">
                <div className='relative'>
                    <Image src="search.svg" width={24} height={24} alt="search" className='absolute left-3 top-2' />
                    <input type="text" className='border border-[#E4E5ED] py-2 pl-10 rounded-md outline-none text-sm font-medium' placeholder='Cari Produk' />
                </div>
                <select className='py2.5 px-3 text-sm font-medium border border-[#E4E5ED] rounded-md'>
                    <option>Semua Kategori</option>
                </select>
            </div>

            <div className='mt-4'>
                <div className="flex font-medium text-sm bg-white border-b-2 py-2">
                    <div className='flex-[0.1]'>ID</div>
                    <div className='flex-[0.2]'>SKU</div>
                    <div className='flex-[0.2]'>Name</div>
                    <div className='flex-[0.2]'>Price</div>
                    <div className='flex-[0.3]'>Action</div>
                </div>
                <div className="flex font-medium text-sm bg-red-200 py-2">
                    <div className='flex-[0.1]'>ID</div>
                    <div className='flex-[0.2]'>SKU</div>
                    <div className='flex-[0.2]'>Name</div>
                    <div className='flex-[0.2]'>Price</div>
                    <div className='flex-[0.3]'><Image src="edit.svg" width={16} height={16} alt="edit" className='cursor-pointer' /></div>
                </div>
            </div>

            <div className='flex justify-between mt-6'>
                <span className='text-sm text-[#909EAB]'>Menampilkan halaman 1 dari 5</span>
                <div className='flex gap-2 items-center'>
                    <Image src="left.svg" width={24} height={24} alt="left" />
                    <span>1</span>
                    <Image src="right.svg" width={24} height={24} alt="right" />
                </div>
            </div>
        </div>
    )
}

export default ProductList