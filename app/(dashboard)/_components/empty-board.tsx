"use client"
import { Button } from '@/components/ui/button'

import { api } from '@/convex/_generated/api'
import Image from 'next/image'
import React from 'react'
import { useOrganization } from '@clerk/nextjs'
import { useApiMutation } from '@/hooks/use-api-mutation'

const EmptyBoard= () => {
    const {organization} = useOrganization()
    const {mutate,pending} = useApiMutation(api.board.create);

    const onClick = ()=>{

        if(!organization) return;
        mutate({
            orgId:organization.id,
            title:"Untitled"
        })
    }
  return (
    <div className='h-full flex flex-col items-center justify-center'>
        <Image
            src={"/globe.svg"}
            height={140}    
            width={140}
            alt='empty-search'
        />
        <h2 className='text-2xl font-semibold mt-6'>
            Create your first board
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            start by creating a board for your org.
        </p>
        <div className='mt-6'>
            <Button disabled={pending} onClick={onClick} size="lg">
                Create Board
            </Button>
        </div>
    </div>
  )
}

export default EmptyBoard