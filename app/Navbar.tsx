"use client"
  
import Link from 'next/link'
import React from 'react'
import classNames from 'classnames';
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Box, Button, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Skeletons from './components/Skeleton';
const Navbar = () => {

const currentPath = usePathname();
    const links =[
        { href : "/", text: "Dashboard" },
        {href: "/issues", text : "Issues"}
    ];
  return (
    <Flex className=' flex h-20 border-black border-1 shadow items-center  px-5 space-x-6  mb-6' justify={"between"}  >
      <Box>
      
      <ul className='flex gap-4 '>
      <Link href="/"> <FaBug color='red' size={25}/> </Link>
        {links.map((link)=>{
            return (
                <li key={link.href}> 
                <Link 
                href={link.href} 
                className={classNames({
                    'text-blue-900': link.href === currentPath,
                    'text-slate-400': link.href !== currentPath,
                    'hover:text-blue-900 transition-color text-lg font-semibold':true
                })}>
                    {link.text}
                </Link>
            </li>
            )
        })}
      </ul>

     </Box>  
      <Flex gap="2" align={"center"}>
          <AuthStatus/>
      </Flex>
    </Flex>
  )
}

const AuthStatus=()=>{
  const {status, data:session} = useSession();
  if(status ==='loading') return (
    <Skeletons width="45px" height="45px"  circle/>
  );
  if(status ==="unauthenticated") return (
            <Link href="/api/auth/signin"> 
                  <Button  className='hover:cursor-pointer'> sign in </Button>
            </Link>
  )
  return(
    <>
    {
      status === "authenticated" &&
      (

        <DropdownMenu.Root>
        <DropdownMenu.Trigger>
        <Image src={session.user!.image!} alt="profile"  width={45} height={45} className='hover:cursor-pointer'></Image>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="soft" color="indigo">
          <Text className='py-2'>{session.user?.email}</Text>
          
          <Link href="/api/auth/signout"> 
                  <Button variant='solid'  className='hover:cursor-pointer'> sign out </Button>
            </Link>
        </DropdownMenu.Content>
      </DropdownMenu.Root> 
      )
    }
    </>   
  )
}

export default Navbar
