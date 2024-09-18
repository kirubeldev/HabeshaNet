
import Renter from "@/components/Renter"

import { cookies } from 'next/headers'
 


const Page = ()=> {
  const cookieStore = cookies()
  const verificationToken = cookieStore.get('act' ) 
  return(
<div>
<Renter accestocken= {verificationToken?.value}/>
</div>
  )
}
export default Page;