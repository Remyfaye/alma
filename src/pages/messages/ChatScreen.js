
import image1 from '../../assets/persons/1.jpeg'
import image2 from '../../assets/persons/2.jpeg'
import image3 from '../../assets/persons/3.jpeg'
import image4 from '../../assets/persons/4.jpeg'
import image5 from '../../assets/persons/5.jpeg'

import Bottombar from "../../components/bottombar/Bottombar"
import Header from "../../components/header/Header"
import { useState } from "react"
import {people} from '../../People'

export default function ChatScreen(){
    const [messages,setMessages] = useState([
        {
            name:'Ellen',
            image:image3,
            message:'Hows it going'
        },
        {
            name:'Ellen',
            image:image3,
            message:'whats up'
        },
        
        {
            message:'im good. how was your day?'
        }
    ])

    return(
        <div className="chatScreen">
            <Header backbtn/>
            <h1>Chat screen</h1>

            {messages.map(message=>(
                <div className='chatscreenMessage'>

                    {message.name ? (
                        <div className='messageSender'>
                            <img src={message.image} className='chatscreenImg'/>
                            <div className='messageSenderText'>{message.message}</div>
                        </div>
                    ) : 
                    (
                        <div className='messageReciever'>
                            <></>
                            <p className='messageRecieverText'>{message.message}</p>
                        </div>
                    )}
                    
                   
                    
                </div>
            ))} 

            <Bottombar/>          
        </div>
    )
}