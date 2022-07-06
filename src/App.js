
import Header from './components/header/Header'
import './App.css';
import {people} from './People';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Feed from './pages/feed/Feed';
import ChatScreen from './pages/messages/ChatScreen';
import Messages from './pages/messages/Messages'
import Profile from './pages/profile/Profile'
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  const [btnLinkState,setBtnLinkstate] = useState(false)
   

    function toggleChatScreen(){
        setBtnLinkstate(btnLinkState => true)
    }

    let personLink = people.map((p)=>{
      return(p.link)
   })

    let toggleChatLink = btnLinkState ? personLink : '/chat'

   
    
  return (
    <div className="App">
      
       

       <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/alma' element={<Home/>} />
              <Route path='/feed' element={<Feed/>} />
              <Route path='/chats' element={<Messages firstChatToggle={toggleChatScreen}/>} />

              {people.map((p)=>(

                <Route path={p.link} element={<ChatScreen/>} />

              ))}
             
              <Route path='/profile' element={<Profile/>} />
          </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
