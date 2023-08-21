export const SCORE_POINTS = 10
export const QUESTIONS_URL = (difficulty, numQuestions) => {
    return `https://opentdb.com/api.php?difficulty=${difficulty}&amount=${numQuestions}`
}