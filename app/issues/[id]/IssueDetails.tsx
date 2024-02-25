import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Issue, Status } from '@prisma/client'
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import Markdown from 'react-markdown'

interface Props{
    issueDetails:Issue
}
function IssueDetails({issueDetails}:Props) {
  return (
    <Box >
        <Heading>
            {issueDetails.title}
        </Heading>
        <Flex gap={'4'} my={'5'}>
            <IssueStatusBadge status={issueDetails.status}/>
            <Text>{issueDetails.createdAt.toDateString()} </Text>
        </Flex>
        <Card>
        <Markdown>{issueDetails.description}</Markdown>
        </Card>
    </Box>
  )
}

export default IssueDetails
