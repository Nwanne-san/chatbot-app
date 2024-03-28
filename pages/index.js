import React, {useState} from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import {signOut} from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
 
export default function Home(){
  const {data:session} = useSession();
  const router = useRouter();
 
  // const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
   
  React.useEffect(() => {
    if(session){
      router.push('chat.js')
    }
  },[])

  return ( 
    <>
    <div className='w-full h-screen desktop-bg flex justify-center px-8  items-center '>
      <div className='w-5/6 flex flex-row justify-around items-center h-4/6 px-8 py-10 bg-indigo-400/20 gap-5'>
        <div className=' '>
          <p className='text-4xl font-bold font-serif'>Welcome to AI Chatbot.</p>
        </div>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <Link href='auth/register' className='min-w-auto px-6 py-3 rounded-md text-lg text-white bg-indigo-700 hover:bg-indigo-900 hover:duration-150'>Sign Up</Link>
          <Link href='auth/login' className='min-w-full px-6 py-3 rounded-md text-lg text-white bg-indigo-700 hover:bg-indigo-900 hover:duration-150'>Sign in</Link>
        </div>

      </div>
    </div>
    </>
    
  )
}