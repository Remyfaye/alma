
import {useEffect, useState} from "react"
import TinderCard from "react-tinder-card"
import './almacards.css'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import image1 from '../../assets/persons/6.jpeg'
import image2 from '../../assets/persons/3.jpeg'
import image3 from '../../assets/persons/4.jpeg'
import image4 from '../../assets/persons/5.jpeg'
import image5 from '../../assets/persons/4.jpeg'


export default function AlmaCards(){
    const [people,setPeople] = useState([
        {
            name: 'tommy sins',
            url:image5,
            desc:"im fun loving and easy going",
            location:'abuja,lagos'
        },
        {
            name: 'tommy sins',
            url:image2,
            desc:"im fun loving and easy going",
            location:'abuja,lagos'
        },
        {
            name: 'tommy sins',
            url:image5,
            desc:"im fun loving and easy going",
            location:'abuja,lagos'
        },
    ])

    const [btnState,setBtnState] = useState(false)

    function likeUser(){
        setBtnState(btnState => true)
        
    }
   
let isDislike = btnState? ' dislikle' : ''

    return(
        <div>
            <div className="tinder-cards">
                {people.map((person) => (

                    <TinderCard 
                    className="swipe" 
                    key={person.name} 
                    preventSwipe={['up','down']}>

                        <div 
                        className={`card${isDislike}`}
                        style={{backgroundImage:`url('${person.url}')`}}>

                            <div className="userInfo">
                                <span className="cardName">{person.name}</span>
                                <span className="cardDesc">{person.desc}</span>
                                <span className="cardLocation">{person.location}</span>
                            </div>

                            

                            <div className="userOptions">
                                <CancelOutlinedIcon className="cancel" fontSize="laege" 
                                onClick={likeUser}/>
                                <FavoriteOutlinedIcon className="like" fontSize="laege"/>
                            </div>
                            

                        </div>

                    </TinderCard>

))}
            </div>
            
        </div>
    )
}












