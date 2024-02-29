import { useState } from 'react';

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}


function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + (count * step));

    return (
        <div>
            <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />
            <span>&nbsp;{step}</span>

            <div>
                <button onClick={() => setCount((c) => Number(c - step))}>-</button>
                <input value={count} onChange={(e) => setCount(Number(e.target.value))} />
                <button onClick={() => setCount((c) => Number(c + step))}>+</button>
            </div>
            <br />

            <div>
                {/*       <span>{step * count days from today is </span> */}
                <span>{(count) === 0 ? "Today is " : ""}</span>
                <span>{(count) > 0 ? `${count} day${count !== 1 ? 's' : ''} from today is ` : ""}</span>
                <span>{(count) < 0 ? `${Math.abs(count)} day${count !== -1 ? 's' : ''} ago was ` : ""}</span>
                <span>{date.toDateString()}</span>
            </div>

            <br />
            {(count !== 0 || step !== 1) ?
                <button onClick={() => { setStep(1); setCount(0); }}>Reset</button>
                :
                null}
        </div >
    );
}