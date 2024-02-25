
import React from 'react'
import {Flex} from '@radix-ui/themes';
import Prisma  from "../../prisma/client"
import IssueActionComponent from './IssueActionComponent';
import IssueStatusFilter from './IssueStatusFilter';
import { Issue, Status } from '@prisma/client';
import Pagination from '../components/Pagination';
import IssueTable, {columnNames } from './_components/IssueTable';
import { Metadata } from 'next';


async function  page({searchParams}:{searchParams:{status: Status, orderBy:keyof Issue, page: string}}) {
  console.log(searchParams.status);

  // pagination parameter
  const page =parseInt(searchParams.page) || 1;
  const pageSize= 5
  

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status) ?
   searchParams.status : undefined
  
  const orderBy = columnNames.includes(searchParams.orderBy) ?
  {[searchParams.orderBy]: 'asc'}: undefined

  const where = { status}

  //fetch total umber of issues
  const issueCount = await Prisma.issue.count({
    where
  })

  //fetching issues
  const issues = await Prisma.issue.findMany({
    where,
    orderBy,
    skip: (page-1) * pageSize,
    take:pageSize
  }); 

  return (
<Flex direction={'column'} gap="3" className='p-5'>
  <Flex justify={'between'} >
       <IssueStatusFilter/>
       <IssueActionComponent/>
  </Flex>

  <div >
   <IssueTable issues={issues}  searchParams={searchParams}/>
  </div>
 
  <Pagination itemCounts={issueCount} pageSize={pageSize} currentPage={page}/>

</Flex>

  )
}

export const dynamic ="force-dynamic"

export const metadata: Metadata = {
  title: 'Issue Tracker - Issue List',
  description: 'View all project issues'
};

export default page
