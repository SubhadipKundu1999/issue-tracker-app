import React, { ReactNode } from 'react'
interface Props {
    children :ReactNode
}

function ErrorComponent({children}: Props) {
  return (
    <p  className='text-red-400'>
      {children}
    </p>
  )
}

export default ErrorComponent
