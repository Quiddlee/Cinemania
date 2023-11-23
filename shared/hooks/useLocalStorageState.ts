'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * Hook to create a state that persists in the local storage.
 *
 * @param {string} initialState - The initial state value.
 * @param {string} key - The key to store the state in the local storage.
 * @return {[string, Dispatch<SetStateAction<string>>]} - An array containing the state value and a function to update the state.
 */
function useLocalStorageState(initialState: string, key: string) {
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) setValue(storedValue);
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue] as [string, Dispatch<SetStateAction<string>>];
}

export default useLocalStorageState;
