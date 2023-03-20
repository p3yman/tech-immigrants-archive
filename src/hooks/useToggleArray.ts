import { useState } from 'react';

export const useToggleArray = (initialArray: string[] = []): [string[], (key: string) => void, () => void] => {
    const [array, setArray] = useState(initialArray);

    const toggleItem = (key: string) => {
        setArray((prevArray) => {
            const index = prevArray.indexOf(key);

            // If the key exists in the array, remove it; otherwise, add it.
            if (index > -1) {
                return prevArray.filter((item) => item !== key);
            } else {
                return [...prevArray, key];
            }
        });
    };

    const clearArray = () => {
        setArray([]);
    };

    return [array, toggleItem, clearArray];
};
