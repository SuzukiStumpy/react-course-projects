import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
    const { points, maxScore, highscore, dispatch } = useQuiz();
    const percentage = (points / maxScore) * 100;

    let emoji;

    if (percentage === 100) { emoji = '🥂' }
    else if (percentage >= 80) { emoji = '🎉' }
    else if (percentage >= 50) { emoji = '🙂' }
    else if (percentage > 0) { emoji = '😐' }
    else { emoji = '🤦‍♂️' }

    return (
        <>
            <p className="result">
                <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxScore} ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">(Highscore: {highscore} points)</p>
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'restart' })}>Restart Quiz</button>
        </>
    )
}

export default FinishScreen
