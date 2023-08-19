import { useState, useEffect } from 'react';
import { useScore } from './useScore';
import { useQuestion } from './useQuestion';
import { getQuestions } from '../services/question';
import confetti from 'canvas-confetti';

export function useGame(){
    const [questions, setQuestions] = useState([])
    const [order, setOrder] = useState(0)
    const [scorePack, colorScore, incrementScore, resetScore, setFinish] = useScore()
    const [question, isCorrectOption, isCheckAnyOption, setQuestion, checkOption] = useQuestion({})
    const { score, finish } = scorePack

    const nextQuestion = () => {
        if(!isCheckAnyOption()) return
        if(isCorrectOption()){
            incrementScore()
        }
        if(order === questions.length-1){
            setFinish(true)
            confetti()
        }else{
            setOrder(order+1)
            setQuestion(questions[order])
        }
    }

    const getNewQuestions = async() => {
        const questionsAPI = await getQuestions()
        setQuestions(questionsAPI)
        return questionsAPI
    }
    
    const resetGame = () => {
        const newQuestions = getNewQuestions()
        setQuestion(newQuestions[0])
        setOrder(0)
        resetScore()
    }
    
    useEffect(() => {
        const newQuestions = getNewQuestions()
        setQuestion(newQuestions[order])
    }, [])
    
    useEffect(() => {
        setQuestion(questions[order])
    }, [questions, order])


    return [{ question, order, score, finish, questions }, colorScore, nextQuestion, checkOption, resetGame]
}