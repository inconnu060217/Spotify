import React from 'react'
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css'


function Navigation(){
    return (
        <div className='NavBar'>
            <div className='nav'>
                <div className='logo'>
                    <img src="/img/spotify.png" alt='' />
                </div>
                <ul className='nav-items'>
                    <li className='nav-item' activeClassName='active'>
                        <NavLink to='/' exact>
                            Acceuil
                        </NavLink>
                    </li>
                    <li className='nav-item' activeClassName='active'>
                        <NavLink to='/search' exact>
                            Recherche
                        </NavLink>
                    </li>
                    <li className='nav-item' activeClassName='active'>
                        <NavLink to='/albums' exact>
                            Albums
                        </NavLink>
                    </li>
                    <li className='nav-item' activeClassName='active'>
                        <NavLink to='/genres' exact>
                            Genres
                        </NavLink>
                    </li>
                    <li className='nav-item' activeClassName='active'>
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
