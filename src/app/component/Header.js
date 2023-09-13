import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='bg-white shadow-md w-full px-10 py-6 flex justify-end'>
            <Image src="/logout.svg" width={24} height={24} alt="logout" />
        </div>
    )
}

export default Header