import React from 'react';
import logo from '../../img/logo.png';
import {UilSearch} from '@iconscout/react-unicons';
import './LogoSearch.css';


function LogoSearch() {
  return (
    <div className="LogoSearch">
        <img src={logo}></img>
        <div className='Search'>
            <input type="text" placeholder="#explore"/>
            <div className='s-icon'>
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch