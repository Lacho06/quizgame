import React from 'react'

const Navbar = ({ order, length, score, colorScore }) => {
    return (
        <nav className='nav-game'>
            <p>Question <span>#{ order+1 }</span> at <span>{ length }</span></p>
            <p>Score: <b className={ colorScore() }>{ score }</b></p>
        </nav>
    )
}

export default Navbar
