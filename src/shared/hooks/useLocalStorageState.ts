import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function useLocalStorageState(initialState: string, key: string) {
  const storedValue = localStorage.getItem(key);
  const init = storedValue || initialState;

  const [value, setValue] = useState(init);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue] as [string, Dispatch<SetStateAction<string>>];
}

export default useLocalStorageState;
