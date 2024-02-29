import { useQuiz } from "../contexts/QuizContext";

function Scoreboard() {
    const { index, answer, numQuestions, points, maxScore } = useQuiz();

    return (
        <header className="progress">
            <progress value={index + Number(answer !== null)} max={numQuestions} />
            <p>Question <strong>{index + 1}</strong>/{numQuestions}</p>
            <p><strong>{points}</strong>/{maxScore} points</p>
        </header>
    )
}

export default Scoreboard
