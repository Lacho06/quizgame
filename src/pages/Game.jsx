import ModalEndGame from '../components/ModalEndGame';
import Question from '../components/Question'
import { useGame } from '../hooks/useGame';
import '../styles/Game.css'
import Navbar from '../components/Navbar';

const Game = () => {
    const [gamePack, colorScore, nextQuestion, checkOption, resetGame] = useGame()
    const { question, order, score, finish, questions, hasResults } = gamePack

    return (
        <main className='container-game'>
            {
                finish ? (
                    <ModalEndGame score={ score } colorScore={ colorScore } resetGame={ resetGame } />
                ) : (
                    <>
                        <Navbar score={ score } order={ order } colorScore={ colorScore } length={ questions.length }  />
                        <Question initialQuestion={ question } hasResults={ hasResults } changeQuestion={ nextQuestion } checkOption={ checkOption } />
                    </>
                )
            }
        </main>
    )
}

export default Game
