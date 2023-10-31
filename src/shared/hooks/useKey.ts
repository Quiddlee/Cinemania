import { useCallback, useEffect } from 'react';

function useKey(key: string, action: () => void) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const keyMatched = e.key.toLowerCase() === key.toLowerCase();

      if (keyMatched) {
        action();
      }
    },
    [action, key],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

export default useKey;
