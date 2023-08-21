import QuestionOption from './QuestionOption'
import '../styles/Question.css'
import { useState } from 'react'

const Question = ({ initialQuestion = {question: '', correct_option: '', options: []}, changeQuestion, checkOption }) => {
    const { question, correct_option, options } = initialQuestion
    const [showResults, setShowResults] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true)
        setTimeout(() => {
            setShowResults(false)
            changeQuestion()
        }, 2000)
    }

    return (
        <>
            <p className='question-q' dangerouslySetInnerHTML={{__html: question && question}} />
            <form onSubmit={ handleSubmit } className='question-form'>
                <div className='question-o-container'>
                    {
                        options && options.map((option, index) => (
                            <QuestionOption 
                                key={index} 
                                initialOption={option}
                                showResults={showResults} 
                                isCorrect={option.option === correct_option}
                                checkOption={checkOption} 
                            />
                        ))
                    }
                </div>
                <button className='button btn-next'>Next</button>
            </form>
        </>
    )
}

export default Question
