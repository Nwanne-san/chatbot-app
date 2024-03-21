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
   
  // React.useEffect(() = {
  //   if(session){
  //     router.push('chat.js')
  //   }
  // })

  return ( 
    <>
    <div id="chat-window"  >
      <div>
        <Navbar/>
        <div className='flex flex-row items-center text-center p-2 justify-between'>
          <h1 className='text-3xl font-sans'>AI CHATBOT</h1>
          <div className='flex flex-row gap-2 items-center'>
            <button onClick={signOut} >Logout</button>
          </div>
        </div>
      </div>
      
      {/* <div id="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>{`${message.sender}: ${message.text}`}</div>
        ))}
      </div> */}
      <div className='w-full flex flex-row gap-4'>
        <input
          type="text"
          className='w-full'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button >Send</button>
        <Link href="/login" className="text-blue-800 hover:underline">Login or Sign Up </Link>
      </div>
      
    </div>
    </>
    
  )
}