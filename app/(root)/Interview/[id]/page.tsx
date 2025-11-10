import { getInterviewById } from '@/lib/auction/general.auction';
import { redirect } from "next/navigation";
import React from 'react'

const page = async ({params} : RouteParams) => {
    const {id} = await params;
    const interview = await getInterviewById(id);
    if(!interview) redirect('/')

  return (
    <div>page</div>
  )
}

export default page
