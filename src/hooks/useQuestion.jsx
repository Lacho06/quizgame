import { useEffect, useState } from "react"

export function useQuestion(initialQuestion = {}){
    const [question, setQuestion] = useState({
        question: null,
        correct_option: null,
        options: [],
    })

    useEffect(() => {
        if(!initialQuestion) return 
        setQuestion(initialQuestion)
    }, [])

    const isCorrectOption = () => {
        if(!question) return
        const { options } = question
        const checkOption = options.filter(option => option.check === true)[0]
        return (checkOption && checkOption === question.correct_option)
    }

    const checkOption = (optionToCheck) => {
        if(!optionToCheck || !question) return
        const { options } = question
        const newOptions = options.filter(option => option !== optionToCheck)
        newOptions.forEach(option => {
            option.check = false
        })
        const optionChecked = { option: optionToCheck, check: true }
        const newQuestion = {...question, options: [...newOptions, optionChecked]}
        setQuestion(newQuestion)
    }


    return [question, isCorrectOption, setQuestion, checkOption]
}