
import ServiceProviderform from "@/components/serviceProviderform"

import { cookies } from 'next/headers'
 


const Page = ()=> {
  const cookieStore = cookies()
  const verificationToken = cookieStore.get('act' ) 
  return(
<div>
<ServiceProviderform accestocken= {verificationToken?.value}/>
</div>
  )
}
export default Page;