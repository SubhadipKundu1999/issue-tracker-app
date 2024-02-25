"use client"
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import Link from '../../components/Link'
import { MdDelete } from "react-icons/md";
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Spinner from '@/app/components/Spinner';

function DeleteIssueButton({issueid}:{issueid: number}) {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

   const deleteIssue = async ()=>{

    try {    
      setIsDeleting(true);
      await axios.delete(`/api/issues/${issueid}`);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setError(true);
    }
   
  }


  return (
  <>
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color='red' className='hover:cursor-pointer' disabled={isDeleting}> 
     {isDeleting && <Spinner/> } 
      <MdDelete  color="white"/>
        <span  className='text-white'>  Delete Issue </span>
    </Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title> Confirm Deletion</AlertDialog.Title>
    <AlertDialog.Description> 
      Are you sure you want to delete this issue? This action cannot be undone. 
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify={"end"}>
      <AlertDialog.Cancel>
        <Button variant='soft' color='gray' className='hover:cursor-pointer'>
          Cancel
        </Button>
      </AlertDialog.Cancel>

      <AlertDialog.Action>
        <Button variant='solid' color='red' className='hover:cursor-pointer'
        onClick={deleteIssue}>
          Delete
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>


<AlertDialog.Root open={error}>
  <AlertDialog.Content>
    <AlertDialog.Title> Error  </AlertDialog.Title>
    <AlertDialog.Description> 
          This issue could not be deleted.
    </AlertDialog.Description>
        <Button variant='soft'  className='hover:cursor-pointer mt-6' onClick={()=> setError(false)}>
          OK
        </Button>
  
  </AlertDialog.Content>
</AlertDialog.Root>
   
</> 

  )
}

export default DeleteIssueButton
