import { useState } from "react"
import { SCORE_POINTS } from '../utils/index';

export function useScore(){
    const [finish, setFinish] = useState(false)
    const [score, setScore] = useState(0)

    const resetScore = () => {
        setScore(0)
        setFinish(false)
    }

    const incrementScore = () => {
        setScore(score+SCORE_POINTS)
    }

    return [{score, finish}, incrementScore, resetScore, setFinish]
}