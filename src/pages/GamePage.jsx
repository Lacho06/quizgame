import Loading from '../components/Loading';
import ModalEndGame from '../components/ModalEndGame';
import ModalError from '../components/ModalError';
import Navbar from '../components/Navbar';
import Question from '../components/Question'
import { useGame } from '../hooks/useGame';
import '../styles/GamePage.css'


const GamePage = () => {
    const [gamePack, colorScore, nextQuestion, checkOption, resetGame] = useGame()
    const { question, order, score, finish, questions, loading, error, hasResults } = gamePack


    return (
        <main className='container-game'>
            {
                error
                ? <ModalError error={ error } />
                : 
                    loading 
                    ? <Loading />
                    : 
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

export default GamePage
