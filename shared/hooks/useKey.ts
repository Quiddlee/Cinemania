import { useCallback, useEffect } from 'react';

/**
 * Registers a keyboard event listener that triggers an action when a specified key is pressed.
 *
 * @param {string} key - The key to listen for.
 * @param {function} action - The action to perform when the specified key is pressed.
 *
 * @return {void}
 */
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
