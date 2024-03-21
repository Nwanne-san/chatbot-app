
import React, {useState} from 'react';
import { Brightness7, DarkMode } from '@mui/icons-material';
import Link from 'next/link';
import Navbar from '@/components/navbar';
 
export default function Home(){

const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [theme, setTheme] = useState(false)

  const toggleTheme = () => setTheme(!theme) 

  return ( 
    <>
    <div id="chat-window" className={theme ? 'light' : 'dark-theme'} >
      <div>
        <Navbar/>
        <div className='flex flex-row items-center text-center p-2 justify-between'>
          <h1 className='text-3xl font-sans'>AI CHATBOT</h1>
          <div className='flex flex-row gap-2 items-center'>
            <button >Logout</button>
            <button onClick={toggleTheme}>{ theme ? <Brightness7/> : <DarkMode/>} </button>
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