import { useEffect } from 'react';

import { APP_TITLE } from '../const/const.ts';

/**
 * Updates the document title when a new title is provided.
 *
 * @param {string} newTitle - The new title for the document.
 * @return {void}
 */
function useDocumentTitle(newTitle: string) {
  useEffect(() => {
    if (newTitle) document.title = newTitle;
    return () => {
      document.title = APP_TITLE;
    };
  }, [newTitle]);
}

export default useDocumentTitle;
