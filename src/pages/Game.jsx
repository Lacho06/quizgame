import Question from '../components/Question'
import '../styles/Game.css'
import { useGame } from '../hooks/useGame';
import { useQuestion } from '../hooks/useQuestion';

const Game = () => {
    const [gamePack, nextQuestion, checkOption, resetGame] = useGame()
    const { question, order, score, finish, length } = gamePack

    const colorScore = () => {
        if(score < 30) return 'score-bad'
        else if(score >= 30 && score <= 70) return 'score-medium'
        else return 'score-good'
    }

    return (
        <main className='container-game'>
            {
                finish ? (
                    <section>
                        Your score is: { score }
                        <button onClick={ resetGame }>Reset game</button>
                    </section>
                ) : (
                    <>
                        <nav className='nav-game'>
                            <p>Question <span>#{ order+1 }</span> at <span>{ length-1 }</span></p>
                            <p>Score: <b className={ colorScore() }>{ score }</b></p>
                        </nav>
                        <Question question={ question } changeQuestion={ nextQuestion } checkOption={ checkOption } />
                    </>
                )
            }
        </main>
    )
}

export default Game
