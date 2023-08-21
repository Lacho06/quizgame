import { useEffect, useState } from "react"
import { getFakeQuestions, getQuestions } from "../services/question"
import { useLoading } from './useLoading';
import useError from './useError';

export function useGroupQuestion(){
    const [questions, setQuestions] = useState([])
    const [order, setOrder] = useState(0)
    const [loading, changeLoading] = useLoading()
    const [error, setErrorMessage] = useError()

    const isFinalQuestion = () => {
        return order === questions.length-1
    }

    const incrementOrder = () => {
        setOrder(order+1)
    }

    const setNewQuestions = () => {
        try{
            const newQuestions = getFakeQuestions()
            setQuestions(newQuestions)
            setErrorMessage(null)
        }catch(e){
            setErrorMessage(e.message)
        }finally{
            changeLoading(false)
        }
    }

    const resetQuestions = () => {
        changeLoading(true)
        setOrder(0)
        setNewQuestions()
    }

    useEffect(() => {
        setNewQuestions()
    }, [])


    return [{questions, order, loading, error}, isFinalQuestion, incrementOrder, resetQuestions]
}