import { useState, useEffect } from 'react';
import { getQuestions } from '../services/question';
import { useScore } from './useScore';
import { useQuestion } from './useQuestion';

export function useGame(){
    const [questions, setQuestions] = useState([])
    const [order, setOrder] = useState(0)
    const [length, setLength] = useState()
    const [scorePack, incrementScore, resetScore, setFinish] = useScore()
    const [question, isCorrectOption, setQuestion, checkOption] = useQuestion(questions[order])
    const { score, finish } = scorePack

    const nextQuestion = () => {
        if(isCorrectOption){
            incrementScore()
        }
        if(order === questions.length-1){
            setFinish(true)
        }else{
            setOrder(order+1)
            setQuestion(questions[order])
        }
    }

    const getNewQuestions = () => {
        setQuestions(getQuestions())
    }

    const resetGame = () => {
        getNewQuestions()
        setOrder(0)
        setLength(questions.length)
        resetScore()
    }

    useEffect(getNewQuestions(), [])

    return [{ question, order, score, finish, length }, nextQuestion, checkOption, resetGame]
}