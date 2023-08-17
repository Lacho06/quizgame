import { useState, useEffect } from 'react';
import { getQuestions } from '../services/question';
import { useScore } from './useScore';
import { useQuestion } from './useQuestion';

export function useGame(){
    const [questions, setQuestions] = useState([])
    const [order, setOrder] = useState(0)
    const [scorePack, incrementScore, resetScore, setFinish] = useScore()
    const [question, isCorrectOption, isCheckAnyOption, setQuestion, checkOption] = useQuestion(questions[order])
    const { score, finish } = scorePack

    const nextQuestion = () => {
        if(!isCheckAnyOption()) return
        if(isCorrectOption()){
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
        setQuestion(questions[order])
    }
    
    const resetGame = () => {
        getNewQuestions()
        setOrder(0)
        resetScore()
    }
    
    useEffect(getNewQuestions, [])
    
    useEffect(() => {
        if(!questions || !order) return 
        setQuestion(questions[order])
    }, [questions, order])


    return [{ question, order, score, finish, questions }, nextQuestion, checkOption, resetGame]
}