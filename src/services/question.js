import results from '../mockups/results.json'

export const getQuestions = () => {
    // API call
    const questionsAPI = results.results

    // data mapped
    const questions = questionsAPI.map(question => {
        const oldOptions = [question.correct_answer, ...question.incorrect_answers]
        oldOptions.sort()
        if(oldOptions.length === 2){
            oldOptions.reverse()
        }
        const mappedOptions = oldOptions.map( value => ({
            option: value,
            check: false
        }))
        return {
            question: question.question,
            correct_option: question.correct_answer,
            options: [...mappedOptions],
        }
    })

    return questions
}
