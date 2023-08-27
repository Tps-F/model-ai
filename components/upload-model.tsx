'use client'


import { Button } from '@nextui-org/button'
import IconCloudUpload from './upload-icon'
import router from 'next/router'

export function UploadModel() {

  return (
        <header>
        
    <Button isIconOnly isDisabled color="primary" onClick={() => router.push('/upload')} className='mr-4'>
        <IconCloudUpload />
        </Button>
    </header>
  )
}






