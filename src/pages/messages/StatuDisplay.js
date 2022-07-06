

import image1 from '../../assets/persons/1.jpeg'
import image2 from '../../assets/persons/2.jpeg'
import image3 from '../../assets/persons/3.jpeg'
import image4 from '../../assets/persons/4.jpeg'
import image5 from '../../assets/persons/5.jpeg'
import {useState} from "react"


export default function StatuDisplay(props){

    const [peopleStatus,setPeople] = useState([
        {
            img:image1,
            name:"Tommy Sins",
            date:"21:12"
        },
        {
            img:image2,
            name:"Jerry Dane",
            date:"yesterday,21:12"
        },
        {
            img:image3,
            name:"Sarah Tomson",
            date:"21:12"
        },
        {
            img:image4,
            name:"Talor Launter",
            date:"2:12"
        },
    ])
    return (
        <div className={`statusWrapper${props.active}`}>

            <div className="statusTop">
                <img src={image1} className="statusTopImg"/>
                <div className="statusTopRight">
                    <h3 className="statusTopTitle">My Status</h3>
                    <span className="statusTopDate">testerday,21:17</span>
                </div>
            </div>

            <div className="statusCenter">Recent Updates</div>

            

                {peopleStatus.map((status) => (
                    <div className="statusTop">
                      
                    <img src={status.img} className="statusTopImg"/>
                    <div className="statusTopRight">
                        <h3 className="statusTopTitle">{status.name}</h3>
                        <span className="statusTopDate">{status.date}</span>
                    </div>

                    </div>
                
                ))}

            

            
            
        </div>
    )
}