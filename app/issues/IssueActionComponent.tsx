import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

function IssueActionComponent() {
  return (
    <Link href={"/issues/new"}> 
    <Button variant='solid' className='hover:cursor-pointer text-xl'>
     <FaPlus size={20} /> New Issue 
     </Button>
     </Link>
  )
}

export default IssueActionComponent
