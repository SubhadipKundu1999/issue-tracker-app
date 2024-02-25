import { Issue, Status } from '@prisma/client';
import { Table } from '@radix-ui/themes'
import NextLink from "next/link";
import Link from '../../components/Link';
import IssueStatusBadge from '../../components/IssueStatusBadge';
import { FaArrowUp } from "react-icons/fa6";
import React from 'react'

interface Props{
    issues:Issue[], 
    searchParams:{
        status: Status,
        orderBy:keyof Issue, 
        page: string
    }
}

 
function IssueTable({issues, searchParams}:Props) {
  return (
    <Table.Root variant='surface' >
  <Table.Header>
    <Table.Row align={'end'}>
      {columns.map((column)=>(
         <Table.ColumnHeaderCell 
         key={column.value} 
         className={column.className}>
          <NextLink href={ {
            query:{...searchParams, orderBy:column.value}
          }}>{column.label}
          {column.value === searchParams.orderBy &&  <FaArrowUp className='inline' />}</NextLink>
          </Table.ColumnHeaderCell>))}
    </Table.Row>
  </Table.Header>
  <Table.Body>

    {issues && issues.map((issue)=>
<Table.Row key ={issue.id}>
<Table.Cell><Link href={`/issues/${issue.id}`}>{issue.title} </Link><div className='block md:hidden'><IssueStatusBadge status={issue.status}/></div></Table.Cell>
<Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status}/></Table.Cell>
<Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
</Table.Row>
    )}
  

  </Table.Body>
</Table.Root>
  )
}

export default IssueTable




const columns :{
    label:string;
    value: keyof Issue;
    className?:string;
  }[] =[
    {label:"Issue", value:'title'},
    {label:'Status',value:'status', className: 'hidden md:table-cell'},
    {label:'Created', value :'createdAt',  className: 'hidden md:table-cell'}
  ] 
  export const columnNames = columns.map(column =>column.value);
