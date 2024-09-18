

import Employer from '@/components/Employer'
import React from 'react'


import { cookies } from 'next/headers'
import PropertieOwnerForm from '@/components/PropertieOwner'
 


const Page = ()=> {
  const cookieStore = cookies()
  const verificationToken = cookieStore.get('act' ) 
  return(
<div>
<PropertieOwnerForm accestocken= {verificationToken?.value}/>
</div>
  )}
  export default Page
