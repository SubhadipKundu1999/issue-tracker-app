"use client"
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const statuses:{label:String, value?: Status, id:number}[]=
[
  {id:1,label:'ALL' },
  { id:2,label:"OPEN", value:"OPEN"},
  {id:3,label:"IN PROGRESS", value: "IN_PROGRESS"},
  {id:4,label:"CLOSED", value:"CLOSED"}
]

function IssueStatusFilter() {
  const searchParams = useSearchParams();
  
  const router = useRouter()
  return (
    <Select.Root defaultValue={searchParams.get('status')!} onValueChange={(statusValue)=>{
      const params = new URLSearchParams();
      if(statusValue !== 'empty') params.append('status', statusValue);
      if(searchParams.get('orderBy'))
      params.append('orderBy', searchParams.get('orderBy')!);
      
      const query = params.size ? '?'+params.toString(): ''; 
      router.push(`/issues`+ query)
    }}>
        <Select.Trigger placeholder='Status ..'/>
        <Select.Content >
         <Select.Group>
         <Select.Label>Status</Select.Label>
         {statuses.map((status)=>  
             <Select.Item 
                key={status.id} 
                value={status.value || "empty"}>
              {status.label}
              </Select.Item>)}
        </Select.Group>
       </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter
