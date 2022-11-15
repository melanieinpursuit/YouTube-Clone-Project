import React from 'react';
import { Link } from 'react-router-dom'


export default function Nav () {
    return (
        <header>
            <article>
                <Link to="/">
                <h1>Home</h1>
                </Link>
                <Link to="/about">
                <h1>About</h1>
                </Link>
            </article>
        </header>
    )
};