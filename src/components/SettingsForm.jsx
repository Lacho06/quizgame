import { useContext, useState } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';
import '../styles/SettingsForm.css'
import { useNavigate } from 'react-router-dom';

const SettingsForm = () => {
    const settingsPack = useContext(SettingsContext)
    const { settings, putNewSettings } = settingsPack
    const [difficulty, setDifficulty] = useState(settings.difficulty)
    const [numQuestions, setNumQuestions] = useState(settings.numQuestions)
    const navigate = useNavigate()


    const handleSettingsSubmit = (e) => {
        e.preventDefault();
        putNewSettings({
            difficulty, numQuestions
        })
        navigate('/')
    }

    return (
        <form onSubmit={ handleSettingsSubmit }>
            <div className='input-container'>
                <label htmlFor="difficulty">Difficulty:</label>
                <select name="difficulty" onChange={ ({ target }) => setDifficulty(target.value) } value={difficulty}>
                    <option disabled defaultChecked>Select an option</option>
                    <option value='random'>Random</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
            </div>
            <div className='input-container'>
                <label htmlFor="numQuestions">Number of questions:</label>
                <div className='input-range-container'>
                    <input type="range" name="numQuestions" value={numQuestions} onChange={ ({ target }) => setNumQuestions(target.value) } min="10" max="50" />
                    <span>{ numQuestions }</span>
                </div>
            </div>
            <button className='button button-done'>Done</button>
        </form>
    )
}

export default SettingsForm
