import React from 'react';
import UCSDLogo from '../assets/UCSanDiegoLogo-BlueGold.svg'

const Header = () => {
    return (
        <div className='Header'>
            <img src={UCSDLogo}/>
            <h1>UCSD Tech Clubs</h1>
            <h2>Welcome to UCSD!</h2> 
        </div>
    )
}

export default Header;