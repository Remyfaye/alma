
import {useState} from "react"

import { Link } from "react-router-dom"
import {people} from '../../People'

export default function(props){

    

    
    

    return(
        <div className={`chatDisplay${props.active}`}>

           {people.map((person) => (

            

            <Link to={person.link} className="chatLink" onClick={props.toggleFunction}>

            
                <div className="chatDisplayItem">
                    

                    <div className="chatLeft">

                        <img src={person.url} className='userImg'/>

                        <div className="chatInfo">
                            <h3 className="usernameitem">{person.name}</h3>
                            <p className="usermessage">{person.desc}</p>
                        </div>

                    </div>

                    <div className="chatRight">
                    {person.date}
                    </div>


                </div>
            </Link>
                
           ))} 
            
        </div>
    )
}