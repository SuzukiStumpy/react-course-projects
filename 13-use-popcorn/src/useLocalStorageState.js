import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, keyname) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(keyname);
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(function () {
        localStorage.setItem(keyname, JSON.stringify(value));
    }, [value, keyname]);


    return [value, setValue];
}