"use client"

import Skeletons from '@/app/components/Skeleton'
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast, {Toaster} from "react-hot-toast"

function AssigningIssues({issue}:{issue: Issue}) {

// assign to user 
  const assignToUser = async(userId:string)=> {
    try {
      if(userId==="null") 
     await axios.patch(`/api/issues/${issue.id}`,{assignedToUserId: null });
     else
     await axios.patch(`/api/issues/${issue.id}`,{assignedToUserId: userId });
      
    } catch (error) {
      toast.error('changes could not be saved');
    }
   
  }

    //react query
    const {isLoading , error, data:users} = useUsers()

    if(error) return null ;
    if(isLoading) return <Skeletons width="40" height="28px"/>

  return (
    <>
    <Select.Root defaultValue={ issue.assignedToUserId || "null"  } 
                 onValueChange={ assignToUser } >
      <Select.Trigger  placeholder="Assign..."/>
      <Select.Content>
        <Select.Group>
        <Select.Item  value={"null"} >Unassigned</Select.Item>

          { users && users.map((user)=>  <Select.Item  key={user.id} value={user.id}>{user.email}</Select.Item>
      )}
          </Select.Group>
      </Select.Content>
    </Select.Root>
    <Toaster/>
  </>
  )
}

const useUsers = () => useQuery<User[]>({
  queryKey:['users'],
  queryFn:()=> axios.get("/api/users").then((res)=>
               res.data
               ),
  staleTime: 60 * 1000, //60 sec
  retry: 3              //retry 3 times
}) 

export default AssigningIssues
