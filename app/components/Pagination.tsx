"use client"
import { Button, Flex, Text } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

interface Props{
    itemCounts: number,
    pageSize:number,
    currentPage: number
}


function Pagination({itemCounts, pageSize, currentPage}:Props) {
   const router = useRouter()
   const searchParams = useSearchParams();
   
   const changePage = function (page:number){
      const params = new URLSearchParams(searchParams);
      params.set('page', page.toString());
      router.push('?'+ params.toString());
   }


    const pageCount = Math.ceil(itemCounts/pageSize);
  return (
    <Flex gap={"2"} align={'center'}>
        <Text size={"2"}>page {currentPage} of {pageCount}</Text>
        <Button variant='soft' disabled={currentPage==1} onClick={()=>changePage(1)}> <MdOutlineKeyboardDoubleArrowLeft /></Button>
        <Button variant='soft'  disabled={currentPage==1} onClick={()=>changePage(currentPage-1)}>   <MdOutlineKeyboardArrowLeft/> </Button>

        <Button variant='soft'  disabled={currentPage==pageCount} onClick={()=>changePage(currentPage+1)}> <MdKeyboardArrowRight /> </Button>
        <Button variant='soft'  disabled={currentPage==pageCount} onClick={()=>changePage(pageCount)}> <MdKeyboardDoubleArrowRight /> </Button>
      
    </Flex>
  )
}

export default Pagination
