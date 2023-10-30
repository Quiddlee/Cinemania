import { createPortal } from 'react-dom';

import useSearch from '../../features/Search/hooks/useSearch.ts';

function Spinner() {
  const { isLoading } = useSearch();

  if (!isLoading) return null;

  return createPortal(
    <div className="absolute bottom-0 left-0 right-0 top-0 z-50 m-auto flex animate-fade-in items-center justify-center bg-black/20 backdrop-blur-sm">
      <span className="loader -translate-x-5" />
    </div>,
    document.body,
  );
}

export default Spinner;
