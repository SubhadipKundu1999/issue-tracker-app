import { Status } from '@prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react'
interface Props{

    open: number,
    in_progress: number,
    closed: number
}

function IssueSummary({open, in_progress, closed}:Props) {
   const  statuses:{
    label:string;
    value: number,
    status: Status,
    color:string
}[] =[
    {label:'Open issues', value: open, status:'OPEN', color:'red'},
    {label:'In-Progress issues', value:in_progress, status:'IN_PROGRESS', color:'violet'},
    {label:'Closed issues', value: closed, status:'CLOSED', color:'green'}
   ]
  return (
    <Flex gap="4">
        {statuses.map((status)=>(
            <Card key={status.status} >
                <Flex direction={'column'}>
                <Link href={`/issues?status=${status.status}`} ><Text className='font-semibold'>{status.label}</Text></Link>
            <Flex justify={'between'} align={'center'}>
            <Text>{status.value}</Text>
            <div className={`w-2 h-2  bg-${status.color}-400  rounded-full`}></div>
            </Flex>
            
                </Flex>
              
        </Card>
        ))}
        
      
    </Flex>
  )
}

export default IssueSummary
