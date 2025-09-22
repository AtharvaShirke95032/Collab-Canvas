import Image from 'next/image'
import React from 'react'

const EmptyFavourites= () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <Image
            src={"/file.svg"}
            height={140}    
            width={140}
            alt='empty-search'
        />
        <h2 className='text-2xl font-semibold mt-6'>
            no Favourites found!
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Try Favourrating a canvas
        </p>
    </div>
  )
}

export default EmptyFavourites