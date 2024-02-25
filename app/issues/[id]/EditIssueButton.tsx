import { Button } from '@radix-ui/themes'
import Link from '../../components/Link'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'

function EditIssueButton({issueid}:{issueid:number}) {
  return (
        
<Button >  
 <FaRegEdit   color="white"/>
 <Link href={`/issues/${issueid}/edit`} >
  <span  className='text-white'>  Edit Issue</span>
</Link> 
</Button>
  )
}

export default EditIssueButton
