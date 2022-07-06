
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import ForumIcon from '@mui/icons-material/Forum';
import {Link} from 'react-router-dom'

import './bottombar.css'
import { IconButton } from '@mui/material';

export default function Bottombar(){
    return(
    <div className='botombarWrapper'>

        <Link to='/alma' className='link'>
        <IconButton className='iconBtn' >
            <HomeRoundedIcon className='bottomIcon' fontSize='large'/>
            <small>Home</small>
        </IconButton>
        </Link>
    
       
        
        <Link to='/feed' className='link'>
        <IconButton className='iconBtn'>
        <RssFeedRoundedIcon className='bottomIcon' fontSize='large'/>
        <small>Feed</small>
        </IconButton>

        </Link>
        
        
        <Link to='/chats' className='link'>

        <IconButton className='iconBtn'>
        <ForumIcon className='bottomIcon' fontSize='large'/>
        <small>Chats</small>
        </IconButton>

        </Link>
        
        
        
    </div>
    )
}