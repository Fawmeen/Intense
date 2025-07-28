import { isAuthenticated } from '@/lib/auction/auth.action';
import { redirect } from 'next/navigation';
import {ReactNode} from 'react'

const authlayout = async({children}: {children: ReactNode}) => {
     const isUserAuthenticated = await isAuthenticated();
      
      if(isUserAuthenticated) redirect('/')
  return (
    <div className="auth-layout">{children}</div>
  )
}

export default authlayout     


