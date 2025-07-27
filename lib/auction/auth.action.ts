'use server';
import {db, auth } from '@/Firebase/admin';
import { cookies } from 'next/headers';
import { success } from "zod";

const ONE_WEEK = 60 * 60 * 24 * 7; // 1 week in milliseconds

export  async function signUp(params: SignUpParams){
  const {uid, name, email} = params;

  try{
    const userRecord = await db.collection('user').doc(uid).get();
    if(userRecord.exists){
        return {
            success: false,
            message: 'User already exists with this email.'
        }
    }
    await db.collection('user').doc(uid).set({
        name, email
    })

    return {
        success: true,
        message: 'Account created successfully'
    }
  }
  catch (e: any) {
    console.error('Error creating a user', e);

    if(e.code === 'auth/email-already-exists'){
      return {
        success: false,
        message: 'This email is already in use.'
      }
    }

    return {
        success: false,
        message: 'Something went wrong while creating your account. Please try again later.'
    }
  }
}

export async function signIn(params: SignInParams) {
    const {email, idToken} = params;

    try{
          const userrecord = await auth.getUserByEmail(email);
            if(!userrecord) {
                return {
                success: false,
                message: 'No user found with this email.'
                }
            }
            await setSessionCookie(idToken);
    }
    catch (e) {
        console.log(e);
        return{
              success: false,
              message: 'Failed to log into an account'
    }
}
}

export async function setSessionCookie(idToken: string) {
     const cookieStore = await cookies();
     const sessionCokkie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000,
     })

     cookieStore.set('session', sessionCokkie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',


     })
}