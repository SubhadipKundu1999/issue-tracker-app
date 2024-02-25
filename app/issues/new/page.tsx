import React from 'react'

import dynamic from 'next/dynamic'
import FormSkeleton from '../_components/FormSkeleton'

const IssueForm = dynamic(
  ()=> import('../_components/IssueForm'),
  { loading: ()=> <FormSkeleton/>,
    ssr:false
  }
)

function CreateIssuePage() {
  return (
   <>
   <IssueForm/>
   </>
  )
}

export default CreateIssuePage
