import Skeletons from '@/app/components/Skeleton'
import React from 'react'

function FormSkeleton() {
  return (
<div className='max-w-xl p-5 space-y-16'>
    <Skeletons height ="2rem" width="33rem" className="mb-3" />
    <Skeletons height ="25rem" width="33rem"  className="mb-4"/>
    <Skeletons height="2rem" width="8rem"/>
</div>
  )
}

export default FormSkeleton
