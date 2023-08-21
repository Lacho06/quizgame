import { useScore } from './useScore';
import { useQuestion } from './useQuestion';
import confetti from 'canvas-confetti';
import { useGroupQuestion } from './useGroupQuestions';

export function useGame(){
    const [groupQuestionPack, isFinalQuestion, incrementOrder, resetQuestions] = useGroupQuestion()
    const { questions, order, loading, error } = groupQuestionPack
    const [scorePack, colorScore, incrementScore, resetScore, setFinish] = useScore()
    const { score, finish } = scorePack
    const [question, isCorrectOption, isCheckAnyOption, setQuestion, checkOption] = useQuestion(questions[order])

    const nextQuestion = () => {
        if(!isCheckAnyOption()) return
        if(isCorrectOption()){
            incrementScore()
        }
        if(isFinalQuestion()){
            setFinish(true)
            confetti()
        }else{
            incrementOrder()
            setQuestion(questions[order])
        }
    }

    const resetGame = () => {
        resetQuestions()
        resetScore()
    }

    return [{ question, order, score, finish, questions, loading, error }, colorScore, nextQuestion, checkOption, resetGame]
}