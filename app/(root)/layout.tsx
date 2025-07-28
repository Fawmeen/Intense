import {ReactNode} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/auction/auth.action'
import { redirect } from 'next/navigation'
const layout = async({children}:{children : ReactNode}) => {
   const isUserAuthenticated = await isAuthenticated();

  // if(!isUserAuthenticated) redirect('/SignIn')
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
         <Image src = "/logo.svg" alt="logo" width={38} height={32} />
         <h2 className="text-primary-100">Intense</h2>
         
        </Link>
        </nav>
      {children}
    
    </div>
  )
}

export default layout