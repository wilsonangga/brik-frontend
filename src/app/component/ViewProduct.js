"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import product from '@/data/product'

const ViewProduct = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [data, setData] = useState({
        image: "",
        name: "",
        sku: "",
        price: "",
        category: "",
        weight: "",
        length: "",
        width: "",
        height: "",
        description: ""
    })
    const getData = () => {
        const id = pathname.split("/")[3]
        setData(product.find((item) => item.id === parseInt(id)))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='my-10 px-8'>
            <div className="flex gap-4">
                <Image src="/chevron-left.svg" width={24} height={24} alt="chevron-left" onClick={() => router.push('/dashboard')} className="cursor-pointer" />
                <h1 className='text-2xl font-semibold'>Produk</h1>
            </div>
            <div className='flex flex-col gap-6 mt-7'>
                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Upload Photo</label>
                    <div>
                        <img src={data.image} alt="Preview" />
                    </div>
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Product Name</label>
                    <input type="text" className={`bg-white rounded-lg px-4 py-3 outline-none text-sm`} placeholder='Input product name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} readOnly />
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>SKU</label>
                    <input type="text" className={`bg-white rounded-lg px-4 py-3 outline-none text-sm`} placeholder='Input SKU' value={data.sku} onChange={(e) => setData({ ...data, sku: e.target.value })} readOnly />
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Price</label>
                    <input type="text" className={`bg-white rounded-lg px-4 py-3 outline-none text-sm`} placeholder='Input price' value={data.price} readOnly />
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Weight</label>
                    <div className="relative w-full">
                        <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full`} placeholder='Input weight' value={data.weight} readOnly />
                        <p className='absolute top-3 right-4 text-sm'>g</p>
                    </div>
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Category</label>
                    <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full`} placeholder='Input Category' value={data.category} readOnly />
                </div>

                <div className="flex gap-4">
                    <div className='flex flex-col w-72 gap-2'>
                        <label htmlFor="name" className='font-medium text-xs'>Length</label>
                        <div className="relative w-full">
                            <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full`} placeholder='Input length' value={data.length} readOnly />
                            <p className='absolute top-3 right-4 text-sm'>cm</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-72 gap-2'>
                        <label htmlFor="name" className='font-medium text-xs'>Width</label>
                        <div className="relative w-full">
                            <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full`} placeholder='Input width' value={data.width} readOnly />
                            <p className='absolute top-3 right-4 text-sm'>cm</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-72 gap-2'>
                        <label htmlFor="name" className='font-medium text-xs'>Height</label>
                        <div className="relative w-full">
                            <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full`} placeholder='Input height' value={data.height} readOnly />
                            <p className='absolute top-3 right-4 text-sm'>cm</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Description</label>
                    <textarea type="text" rows={5} className={`bg-white rounded-lg pl-4 pr -8 py-3 outline-none text-sm w-full`} placeholder='Input description' value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} readOnly></textarea>
                </div>

            </div>
        </div>
    )
}

export default ViewProduct