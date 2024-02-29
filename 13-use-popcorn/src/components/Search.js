import { useRef } from "react";
import { useKey } from "../useKey";

export default function Search({ query, setQuery }) {
    const inputElement = useRef(null);

    useKey("Enter", function callback(e) {
        if (document.activeElement === inputElement.current) return;

        if (e.code === "Enter") {
            inputElement.current.focus();
            setQuery("");
        }
    })

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputElement}
        />
    );
}
