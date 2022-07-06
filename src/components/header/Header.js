
import './header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import image1 from '../../assets/persons/6.jpeg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import {Link} from 'react-router-dom'


export default function Header({backbtn}){
    
    return(
        <div className='header'>

           {backbtn?(
                <Link to='/chats'>
                    <ArrowBackIosIcon/>
                </Link>
                
           ):(
            <div className='logoWrapper'>
                
            <h3 className='logo'>Alma</h3>
        </div>
           )}

            
               
               
           

            
            
            
            <Link to='/profile'>

            <IconButton>
            <img src={image1} className='profileIcon' fontSize='large'/>
            </IconButton>

            </Link>
            
            
            
        </div>
    )
}