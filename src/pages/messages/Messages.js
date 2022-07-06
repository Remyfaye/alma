
import Bottombar from "../../components/bottombar/Bottombar"
import Header from "../../components/header/Header"
import ChatDisplay from "./ChatDisplay"
import StatuDisplay from "./StatuDisplay"
import { people } from "../../People"
import './messages.css'

import { useState } from "react"

export default function Messages(props){

    const [btnState,setBtnstate] = useState(false)

    function toggleStatus(){
        setBtnstate(btnState=>true)
    }

    function toggleChat(){
        setBtnstate(btnState=>false)
    }




    
    

    let toggleActive = btnState ? ' active' : ''
    return(
        <div>
            <Header />

            <div className="chatTop">
                <span className="chatTopItem" onClick={toggleChat}>Chats</span>
                <span className="chatTopItem" onClick={toggleStatus}>Status</span>
                <span className="chatTopItem">Calls</span>
            </div>

            <ChatDisplay 
            active={toggleActive} 
             
            toggleFunction = {props.firstChatToggle}/>
            <StatuDisplay active={toggleActive}/>

            <Bottombar/>
        </div>
    )
}