"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import category from '@/data/category'

const AddProduct = () => {
    const router = useRouter()
    const [data, setData] = useState({
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
    const [error, setError] = useState({
        name: false,
        sku: false,
        price: false,
        category: false,
        weight: false,
        length: false,
        width: false,
        height: false,
        description: false
    })

    const checkEmpty = () => {
        if (!data.name || !data.sku || !data.price || !data.category || !data.weight || !data.length || !data.width || !data.height || !data.description) {
            const updatedError = { ...error }
            updatedError.name = !data.name;
            updatedError.sku = !data.sku;
            updatedError.price = !data.price;
            updatedError.category = !data.category;
            updatedError.weight = !data.weight;
            updatedError.length = !data.length;
            updatedError.width = !data.width;
            updatedError.height = !data.height;
            updatedError.description = !data.description;
            setError(updatedError)
            return true;
        } else {
            return false
        }
    }

    const handleChange = (event, prop) => {
        // Get the current input value
        let value = event.target.value;

        // Remove any non-numeric characters using a regular expression
        value = value.replace(/[^0-9]/g, '');

        // Update the input field value
        if (prop === "price") {
            setData({ ...data, price: value })
        } else if (prop === "weight") {
            setData({ ...data, weight: value })
        } else if (prop === "length") {
            setData({ ...data, length: value })
        } else if (prop === "width") {
            setData({ ...data, width: value })
        } else if (prop === "height") {
            setData({ ...data, height: value })
        }
    };

    return (
        <div className='my-10 px-8'>
            <div className="flex gap-4">
                <Image src="/chevron-left.svg" width={24} height={24} alt="chevron-left" onClick={() => router.push('/dashboard')} className="cursor-pointer" />
                <h1 className='text-2xl font-semibold'>Tambah Produk</h1>
            </div>
            <div className='flex flex-col gap-6 mt-7'>
                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Product Name</label>
                    <input type="text" className={`bg-white rounded-lg px-4 py-3 outline-none text-sm ${error.name ? 'border border-red-500' : 'border-none'}`} placeholder='Input product name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                    <span className={`text-red-600 text-xs font-medium ${error.name ? 'block' : 'hidden'}`}>Product Name is required</span>
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>SKU</label>
                    <input type="text" className={`bg-white rounded-lg px-4 py-3 outline-none text-sm ${error.sku ? 'border border-red-500' : 'border-none'}`} placeholder='Input SKU' value={data.sku} onChange={(e) => setData({ ...data, sku: e.target.value })} />
                    <span className={`text-red-600 text-xs font-medium ${error.sku ? 'block' : 'hidden'}`}>SKU is required</span>
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Price</label>
                    <input type="text" className={`bg-white rounded-lg px-4 py-3 outline-none text-sm ${error.price ? 'border border-red-500' : 'border-none'}`} placeholder='Input price' value={data.price} onChange={(e) => handleChange(e, "price")} />
                    <span className={`text-red-600 text-xs font-medium ${error.price ? 'block' : 'hidden'}`}>Price is required</span>
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Weight</label>
                    <div className="relative w-full">
                        <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full ${error.weight ? 'border border-red-500' : 'border-none'}`} placeholder='Input weight' value={data.weight} onChange={(e) => handleChange(e, "weight")} />
                        <p className='absolute top-3 right-4 text-sm'>g</p>
                    </div>
                    <span className={`text-red-600 text-xs font-medium ${error.weight ? 'block' : 'hidden'}`}>Weight is required</span>
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Category</label>
                    <select className={`bg-white rounded-lg px-4 py-3 outline-none text-sm ${error.category ? 'border border-red-500' : 'border-none'}`}>
                        <option value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })}>Select Category</option>
                        {category.map((item, index) => {
                            return <option value={item.value} key={index}>{item.name}</option>
                        })}
                    </select>
                    <span className={`text-red-600 text-xs font-medium ${error.category ? 'block' : 'hidden'}`}>Category is required</span>
                </div>

                <div className="flex gap-4">
                    <div className='flex flex-col w-72 gap-2'>
                        <label htmlFor="name" className='font-medium text-xs'>Length</label>
                        <div className="relative w-full">
                            <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full ${error.length ? 'border border-red-500' : 'border-none'}`} placeholder='Input length' value={data.length} onChange={(e) => handleChange(e, "length")} />
                            <p className='absolute top-3 right-4 text-sm'>cm</p>
                        </div>
                        <span className={`text-red-600 text-xs font-medium ${error.length ? 'block' : 'hidden'}`}>Length is required</span>
                    </div>
                    <div className='flex flex-col w-72 gap-2'>
                        <label htmlFor="name" className='font-medium text-xs'>Width</label>
                        <div className="relative w-full">
                            <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full ${error.width ? 'border border-red-500' : 'border-none'}`} placeholder='Input width' value={data.width} onChange={(e) => handleChange(e, "width")} />
                            <p className='absolute top-3 right-4 text-sm'>cm</p>
                        </div>
                        <span className={`text-red-600 text-xs font-medium ${error.width ? 'block' : 'hidden'}`}>Width is required</span>
                    </div>
                    <div className='flex flex-col w-72 gap-2'>
                        <label htmlFor="name" className='font-medium text-xs'>Height</label>
                        <div className="relative w-full">
                            <input type="text" className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full ${error.height ? 'border border-red-500' : 'border-none'}`} placeholder='Input height' value={data.height} onChange={(e) => handleChange(e, "height")} />
                            <p className='absolute top-3 right-4 text-sm'>cm</p>
                        </div>
                        <span className={`text-red-600 text-xs font-medium ${error.height ? 'block' : 'hidden'}`}>Height is required</span>
                    </div>
                </div>

                <div className='flex flex-col w-72 gap-2'>
                    <label htmlFor="name" className='font-medium text-xs'>Description</label>
                    <textarea type="text" rows={5} className={`bg-white rounded-lg pl-4 pr-8 py-3 outline-none text-sm w-full ${error.description ? 'border border-red-500' : 'border-none'}`} placeholder='Input description' value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })}></textarea>
                    <span className={`text-red-600 text-xs font-medium ${error.description ? 'block' : 'hidden'}`}>Description is required</span>
                </div>

                <button className='bg-[#008CFF] w-72 py-3 text-white font-semibold rounded-lg text-sm' onClick={() => checkEmpty()}>Simpan</button>
            </div>
        </div>
    )
}

export default AddProduct