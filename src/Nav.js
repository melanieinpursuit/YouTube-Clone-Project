import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'


export default function Nav () {
    return (
        <header>
            <article className='nav'>
                <Link to="/">
                <h1 className='homeLink'>Home</h1>
                </Link>
                <Link to="/about">
                <h1 className='aboutLink'>About</h1>
                </Link>
            </article>
        </header>
    )
};