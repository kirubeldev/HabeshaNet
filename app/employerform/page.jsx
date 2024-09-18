import Employer from '@/components/Employer'
import React from 'react'

import ServiceProviderform from "@/components/serviceProviderform"

import { cookies } from 'next/headers'
 


const Page = ()=> {
  const cookieStore = cookies()
  const verificationToken = cookieStore.get('act' ) 
  return(
<div>
<Employer accestocken= {verificationToken?.value}/>
</div>
  )}
  export default Page
