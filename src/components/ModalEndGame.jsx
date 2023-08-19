import React from 'react'
import '../styles/ModalEndGame.css'

const ModalEndGame = ({ score, colorScore, resetGame }) => {
    return (
        <section className='endGame-container'>
            <p>Your score is: <span className={ colorScore() }>{ score }</span></p>
            <button className='button' onClick={ () => resetGame() }>Reset game</button>
        </section>
    )
}

export default ModalEndGame
