import { useState } from "react"
import { SCORE_POINTS } from '../utils/constants.js';

export function useScore(){
    const [finish, setFinish] = useState(false)
    const [score, setScore] = useState(0)

    const resetScore = () => {
        setScore(0)
        setFinish(false)
    }

    const colorScore = () => {
        if(score < 30) return 'score-bad'
        else if(score >= 30 && score <= 70) return 'score-medium'
        else return 'score-good'
    }

    const incrementScore = () => {
        setScore(score+SCORE_POINTS)
    }

    return [{score, finish}, colorScore, incrementScore, resetScore, setFinish]
}