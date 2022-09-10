import React from 'react';
import './Header.css';
import Person4Icon from '@mui/icons-material/Person4';
import { IconButton } from '@mui/material';
import DragonIcon from './images/dragon.png';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
        
        <IconButton>
            <Person4Icon fontSize='large' className='header__icon'/>
        </IconButton>

        <img src={DragonIcon} className='header__logo' alt='dragon'/>

        <IconButton>
            <ForumIcon className='header__icon'/>
        </IconButton>

    </div>
  )
}

export default Header;