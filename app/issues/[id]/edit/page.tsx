import React from 'react'

import  Prisma  from '../../../../prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import FormSkeleton from '../../_components/FormSkeleton'

const IssueForm = dynamic(
  ()=> import('../../_components/IssueForm'),
  { loading: ()=> <FormSkeleton/>,
    ssr:false
  }
)

interface Props{
    params:{
        id:string
    }
}

async function EditIssuePage({params}:Props) {

    const issue = await Prisma.issue.findUnique({
        where:{
            id: parseInt(params.id)
        }
    });

    if(!issue){
        notFound();
    }

  return (
    <div>
      <IssueForm issue={issue}  />
    </div>
  )
}

export default EditIssuePage
