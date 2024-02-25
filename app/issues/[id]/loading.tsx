import { Card, Flex, Heading } from '@radix-ui/themes'
import React from 'react'

function IssueDetailsloading() {
  return (
    <div className='p-5 mt-10 prose'>
    <Heading>
    <div className="h-6 bg-slate-200 rounded col-span-1 w-20"></div>
    </Heading>
    
    <Flex gap={'4'} my={'5'}>
    <div className="h-4 bg-slate-200 rounded col-span-1 w-10"></div>
    <div className="h-4 bg-slate-200 rounded col-span-1 w-20"></div>
       
    </Flex>
    <Card>
    <div className="h-16 bg-slate-200 rounded col-span-1"></div>
    </Card>
    
  
</div>
  )
}

export default IssueDetailsloading
