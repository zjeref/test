import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");

  useEffect(() => {
    const url = 'https://corsproxy.io/?' + encodeURIComponent('http://localhost:3000/api/v1/accounts/1/conversations/4/messages');
    const headers = { api_access_token: "HeYAds24Px5WaGjDebPYjWtU" };
    axios.get(url, { headers })
      .then(res => {
        console.log(res.data);
        setMessages(res.data); // Assuming you want to update state with the fetched messages
      })
      .catch(error => {
        console.error('Error making the request:', error);
      });
  }, []);

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className='min-h-[600px] min-w-[400px] bg-black'>
        <div className='w-full h-96 text-white'>
          {/* Render messages here */}
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <div>
          <input type="text" placeholder='enter chat' />
          <button type='button' className='bg-white' onClick={() => { }}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
