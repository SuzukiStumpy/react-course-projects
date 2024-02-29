import { useQuiz } from "../contexts/QuizContext";

function Options() {
    const { questions, index, answer, dispatch } = useQuiz();
    const hasAnswered = answer !== null;
    const question = questions[index];

    return (
        <div className="options">
            {question.options.map((option, idx) => (
                <button
                    className={`btn btn-option ${idx === answer ? "answer" : ""} ${hasAnswered ? (idx === question.correctOption ? "correct" : "wrong") : ""}`}
                    key={option}
                    disabled={answer !== null}
                    onClick={() => dispatch({ type: 'newAnswer', payload: idx })}
                >
                    {option}
                </button>
            ))
            }
        </div >
    )
}

export default Options
