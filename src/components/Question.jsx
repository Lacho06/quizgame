import QuestionOption from './QuestionOption'
import '../styles/Question.css'

const Question = ({ initialQuestion = {question: '', correct_option: '', options: []}, changeQuestion, checkOption }) => {

    const { question, options } = initialQuestion

    const handleSubmit = (e) => {
        e.preventDefault();
        changeQuestion()
    }

    return (
        <>
            <p className='question-q' dangerouslySetInnerHTML={{__html: question && question}} />
            <form onSubmit={ handleSubmit } className='question-form'>
                <div className='question-o-container'>
                    {
                        options && options.map((option, index) => (
                            <QuestionOption key={index} initialOption={option} checkOption={checkOption} />
                        ))
                    }
                </div>
                <button className='button btn-next'>Next</button>
            </form>
        </>
    )
}

export default Question
