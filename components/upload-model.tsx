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
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>
          <Button isIconOnly  color="primary" className='mr-4'>   {/* for activate button  onClick={() => router.push('/upload')}  */}
          <IconCloudUpload />
          </Button>
          </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Disabled</div>
                <div className="text-tiny">The option to upload models is disabled, find out when it comes back on       
                <Link isBlock showAnchorIcon href="discord.gg/iahispano" color="primary" size='sm' className='ml-2'>
                Discord
              </Link>
              </div>
              </div>
            </PopoverContent>
        </Popover>
    }
    </header>
  )
}






