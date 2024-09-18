
import BabySitterFinder from "@/components/babySitterFinder"

import { cookies } from 'next/headers'
 


const Page = ()=> {
  const cookieStore = cookies()
  const verificationToken = cookieStore.get('act' ) 
  return(
<div>
<BabySitterFinder accestocken= {verificationToken?.value}/>
</div>
  )
}
export default Page;