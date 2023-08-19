import { useEffect, useState } from "react"

export function useQuestion(initialQuestion){
    const [question, setQuestion] = useState({
        question: '',
        correct_option: '',
        options: [],
    })
    
    useEffect(() => {
        if(!initialQuestion) return 
        setQuestion(initialQuestion)
    }, [])
    
    const isCheckAnyOption = () => {
        if(!question) return
        const { options } = question
        return options.some(option => option.check === true)
    }
    
    const isCorrectOption = () => {
        if(!question) return
        const { options } = question
        const checkOption = options.filter(option => option.check === true)[0]
        return (checkOption && checkOption.option === question.correct_option)
    }

    const checkOption = (optionToCheck) => {
        if(!optionToCheck || !question) return
        const { options } = question
        const newOptions = options
        newOptions.forEach(option => {
            if(option.option === optionToCheck){
                option.check = true
            }else{
                option.check = false
            }
        })
        const newQuestion = {...question, options: newOptions}
        setQuestion(newQuestion)
    }


    return [question, isCorrectOption, isCheckAnyOption, setQuestion, checkOption]
}