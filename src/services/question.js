import { QUESTIONS_URL } from "../utils/constants"
import fakeResults from '../mockups/results.json'

const questionsMapped = (questions = []) => {
    return questions.map (question => {
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
}


export const getFakeQuestions = () => {
    return questionsMapped(fakeResults.results)
}

export const getQuestions = async() => {
    const defaultSettings = {
        difficulty: 'random',
        numQuestions: 10,
    }
    const newSettings = readLocalSettings() || defaultSettings
    const { difficulty, numQuestions } = JSON.parse(newSettings)

    // API call
    const response = await fetch(QUESTIONS_URL(difficulty, numQuestions))
    const data = await response.json()
    // data mapped
    const results = questionsMapped(data.results)

    return results
}

export const readLocalSettings = () => {
    return window.localStorage.getItem('settings')
}

export const saveLocalSettings = (settings) => {
    window.localStorage.setItem('settings', JSON.stringify(settings))
}