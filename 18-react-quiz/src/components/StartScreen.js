import { useQuiz } from "../contexts/QuizContext"

function StartScreen() {
    const { numQuestions, dispatch } = useQuiz();
    return (
        <div className="start">
            <h2>Welcometo the react quiz!</h2>
            <h3>{numQuestions} question{numQuestions === 1 ? '' : 's'} to test your react mastery.</h3>
            <button className="btn" onClick={() => dispatch({ type: 'start' })}>Let's start</button>
        </div>
    )
}

export default StartScreen

