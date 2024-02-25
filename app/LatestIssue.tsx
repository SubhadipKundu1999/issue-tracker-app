import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes'
import  Prisma  from '../prisma/client'
import React from 'react'
import Link from 'next/link'
import IssueStatusBadge from './components/IssueStatusBadge'
import { Metadata } from 'next'

async function LatestIssue() {
    const issues = await Prisma.issue.findMany({
    orderBy: {createdAt:'desc'},
    take:5,
    include:{
        assingnedToUser: true
    }
    })
  return (
    <>
    <Card>
      <Heading size={'4'}>Latest Issues</Heading>
    <Table.Root className='p-2'>
      <Table.Body>
        {issues.map((issue)=>(
            <Table.Row key={issue.id} className='py-5'>
              <Table.Cell >
                <Flex justify={'between'}>
                <Flex direction={'column'} justify='center' align={'start'}>
                <Link href={`/issues/${issue.id}`}> {issue.title}</Link>
                <IssueStatusBadge status={issue.status}/>
                </Flex>
                {issue.assingnedToUser &&
                <Avatar src={issue.assingnedToUser.image!} fallback="?" /> }
              </Flex>  
                </Table.Cell> 
            </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </Card>
    </>
  )
}

export default LatestIssue


