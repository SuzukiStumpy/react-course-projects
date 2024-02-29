import { useEffect, useState } from "react";


export default function App() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [converted, setConverted] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        // Bail early if we're sending in zero so we don't get an error...
        if (Number(amount) === 0) return;
        if (fromCurrency === toCurrency) return setConverted(amount);

        const convert = async function () {
            setIsLoading(true);
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await res.json();

            setConverted(data.rates[toCurrency]);
            setIsLoading(false);
        }
        convert();
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div>
            <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))} disabled={isLoading} />
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{converted}</p>
        </div>
    );
}
