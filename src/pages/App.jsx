import { Link } from 'react-router-dom'
import '../styles/App.css'

const App = () => {
  return (
    <main className='container-app'>
        <header>
          <h1><span>Quiz</span> Game</h1>
        </header>
          <div className='buttons-container'>
            <Link to="/game" className='button button-green button-link'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              Play!! 
            </Link>

            <Link to="/settings" className='button button-green button-link'>Settings</Link>
          </div>
    </main>
  )
}

export default App
