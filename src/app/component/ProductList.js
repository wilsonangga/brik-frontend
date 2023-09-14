"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import product from '@/data/product'
import category from '@/data/category'

const ProductList = () => {
    const router = useRouter()
    const [page, setPage] = useState(0)
    const [data, setData] = useState(product)
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState(null)
    const [categorySelect, setCategorySelect] = useState("")

    const nextPage = () => {
        if (search === "") {
            if (page < Math.ceil(product?.length / 10) - 1) {
                setPage((page) => page + 1)
            }
        } else {
            if (page < Math.ceil(searchResult?.length / 10) - 1) {
                setPage((page) => page + 1)
            }
        }
    }

    const prevPage = () => {
        if (page > 0) {
            setPage((page) => page - 1)
        }
    }

    const searchProduct = (s) => {
        setPage(0)
        const result = product?.filter((item) => item?.name?.toLowerCase()?.includes(s))
        setSearchResult(result)
    }

    useEffect(() => {
        if (search !== "") {
            searchProduct(search)
        }
    }, [search])

    return (
        <div className='pl-6 pr-10 py-10'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold'>Product</h1>
                <button className='bg-[#008CFF] rounded-lg py-3 w-40 text-sm font-semibold text-white' onClick={() => router.push('/dashboard/product/add')}>Tambah</button>
            </div>

            <div className='relative mt-7'>
                <Image src="search.svg" width={24} height={24} alt="search" className='absolute left-3 top-2' />
                <input type="text" className='border border-[#E4E5ED] py-2 pl-10 rounded-md outline-none text-sm font-medium' placeholder='Search Product Name' onChange={(e) => setSearch(e.target.value)} value={search} />
            </div>

            <div className='mt-4'>
                <div className="flex font-medium text-sm bg-white border-b-2 py-3">
                    <div className='flex-[0.1] pl-4'>ID</div>
                    <div className='flex-[0.2] pl-4'>SKU</div>
                    <div className='flex-[0.2] pl-4'>Name</div>
                    <div className='flex-[0.2] pl-4'>Price</div>
                    <div className='flex-[0.3] pl-4'>Action</div>
                </div>
                {
                    search === "" ?
                        data?.slice(page * 10, (page + 1) * 10)?.map((item, index) => (
                            <div className={`flex font-medium text-sm py-3 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FC]'}`} key={index}>
                                <div className='flex-[0.1] pl-4'>{item?.id}</div>
                                <div className='flex-[0.2] pl-4'>{item?.sku}</div>
                                <div className='flex-[0.2] pl-4'>{item?.name}</div>
                                <div className='flex-[0.2] pl-4'>{item?.price.toLocaleString('id-ID')}</div>
                                <div className='flex-[0.3] pl-4'><Image src="edit.svg" width={16} height={16} alt="edit" className='cursor-pointer' onClick={() => router.push(`/dashboard/product/${item?.id}`)} /></div>
                            </div>
                        )) :
                        searchResult?.slice(page * 10, (page + 1) * 10)?.map((item, index) => (
                            <div className={`flex font-medium text-sm py-3 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FC]'}`} key={index}>
                                <div className='flex-[0.1] pl-4'>{item?.id}</div>
                                <div className='flex-[0.2] pl-4'>{item?.sku}</div>
                                <div className='flex-[0.2] pl-4'>{item?.name}</div>
                                <div className='flex-[0.2] pl-4'>{item?.price?.toLocaleString('id-ID')}</div>
                                <div className='flex-[0.3] pl-4'><Image src="edit.svg" width={16} height={16} alt="edit" className='cursor-pointer' onClick={() => router.push(`/dashboard/product/${item?.id}`)} /></div>
                            </div>
                        ))
                }

            </div>

            <div className='flex justify-between mt-6'>
                <span className='text-sm text-[#909EAB]'>Menampilkan halaman {page + 1} dari {search === "" ? Math.ceil(product?.length / 10) : Math.ceil(searchResult.length / 10)}</span>
                <div className='flex gap-2 items-center'>
                    <Image src="left.svg" width={24} height={24} alt="left" onClick={() => prevPage()} className="cursor-pointer" />
                    <span>{page + 1}</span>
                    <Image src="right.svg" width={24} height={24} alt="right" onClick={() => nextPage()} className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default ProductList