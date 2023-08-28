'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import IconCloudUpload from './upload-icon'
import { Link, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

export function UploadModel ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  return (
        <header>
        {
        session === null
              ? (
        <Button isIconOnly isDisabled color="primary" className='mr-4'>
        <IconCloudUpload />
        </Button>
        )
        : 
          <Button isIconOnly  color="primary" className='mr-4' onClick={() => router.push('/upload')}>   {/* for activate button  onClick={() => router.push('/upload')}  */}
          <IconCloudUpload />
          </Button>
    }
    </header>
  )
}






