
import VerificationForm from "@/components/verfy"
import { cookies } from 'next/headers'
 


const Page = ()=> {
  const cookieStore = cookies()
  const verificationToken = cookieStore.get('act' ) 
  return(
<div>
<VerificationForm verificationToken= {verificationToken?.value}/>
</div>
  )
}
export default Page;