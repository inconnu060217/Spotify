import React from 'react'
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css'


function Navigation() {
    return (
        <div className='Navigations'>
            <div className='Navigation'>
                <div className='logo'>
                    <img src="/img/spotify.png" alt='' />
                </div>
                <ul className='navigations-components'>
                    <li className='Navigation-component'>
                        <NavLink to='/' exact>
                            Acceuil
                        </NavLink>
                    </li>
                    <li className='Navigation-component'>
                        <NavLink to='/albums' exact>
                            Albums
                        </NavLink>
                    </li>
                    <li className='Navigation-component'>
                        <NavLink to='/genres' exact>
                            Genres
                        </NavLink>
                    </li>
                    <li className='Navigation-component'>
                        <NavLink to='/artistes' exact>
                            Artistes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;
