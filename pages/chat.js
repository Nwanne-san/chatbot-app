
import React, {useState} from 'react';
import { Brightness7, DarkMode } from '@mui/icons-material'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';
 
export default function Login(){

  const {data:session} = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if(!session){
      router.push('auth/login')
    }
  })
  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });
      const data = await response.json();
      setMessages([...messages, { sender: 'You', text: userInput }, { sender: 'Chatbot', text: data.response }]);
      setUserInput('');
    }
  };

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'GET',
    });
    const data = await response.json();
    alert(data.message);
    location.reload();
  };

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [theme, setTheme] = useState(false)

  const toggleTheme = () => setTheme(!theme) 

  return ( 
    <>
    <div id="chat-window" className={theme ? 'light' : 'dark-theme'} >
      <div className='flex flex-row items-center text-center p-2 justify-between'>
        <h1 className='text-3xl font-sans'>AI CHATBOT</h1>
        <div className='flex flex-row gap-2 items-center'>
          <button onClick={signOut}>Logout</button>
          <button onClick={toggleTheme}>{ theme ? <Brightness7/> : <DarkMode/>}</button>
        </div>
      </div>
      
      {/* <div id="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>{`${message.sender}: ${message.text}`}</div>
        ))}
      </div> */}
      <div className='w-full flex flex-row gap-4 py-4 px-2'>
        <input
          type="text"
          className='w-full rounded-2xl'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button >Send</button>
      </div>
    </div>
    </>
    
  )
}