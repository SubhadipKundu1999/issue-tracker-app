import { Table } from '@radix-ui/themes'
import React from 'react'   
import IssueActionComponent from './IssueActionComponent';
import Skeletons from '../components/Skeleton';
const array =[1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14, 15];


function TableSkelEton() {

  return (
<div>
<div className='p-5'>
<IssueActionComponent/>
</div>
<div className='p-5'>
    <Table.Root variant='surface'>
    <Table.Header>
    <Table.Row align={'end'}>
      <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Satus</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Created At</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {array.map((element) => 
         <Table.Row key={element}>
         <Table.Cell > <Skeletons width="5rem" height="1rem"> </Skeletons>
         <div className='block md:hidden'><Skeletons height ="1rem" width="2rem"/></div> 
         </Table.Cell>
         <Table.Cell  className='hidden md:table-cell'><Skeletons height ="1rem" width="2rem"/></Table.Cell>
         <Table.Cell  className='hidden md:table-cell'><Skeletons height ="1rem" width="10rem"/></Table.Cell>
       </Table.Row>
    )}
  </Table.Body>
</Table.Root>
</div>
</div>
  )
}

export default TableSkelEton
