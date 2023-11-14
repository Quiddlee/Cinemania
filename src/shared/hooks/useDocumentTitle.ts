import { useEffect } from 'react';

import { APP_TITLE } from '../const/const.ts';

function useDocumentTitle(newTitle: string) {
  useEffect(() => {
    if (newTitle) document.title = newTitle;
    return () => {
      document.title = APP_TITLE;
    };
  }, [newTitle]);
}

export default useDocumentTitle;
