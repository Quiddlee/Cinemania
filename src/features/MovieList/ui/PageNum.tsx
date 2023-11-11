import useUrl from '../../../shared/hooks/useUrl.ts';
import addLeadingZero from '../../../shared/lib/helpers/addLeadingZero.ts';
import { urlParams } from '../../../shared/types/enums.ts';
import useSearch from '../../Search/hooks/useSearch.ts';

function PageNum() {
  const { readUrl } = useUrl();
  const { totalResults } = useSearch();
  const moviesPerPage = Number(readUrl(urlParams.MOVIES_PER_PAGE));

  const currPage = addLeadingZero(Number(readUrl(urlParams.PAGE)));
  const maxPage = Math.ceil(totalResults / moviesPerPage);

  return (
    <span
      style={{
        viewTransitionName: 'page',
      }}
      className="flex h-12 min-w-[125px] items-center justify-center rounded-full border-l border-t border-white/20 bg-white/10 px-4 py-1 text-zinc-100 shadow-2xl backdrop-blur-xl backdrop-saturate-200">
      {currPage} of {maxPage}
    </span>
  );
}

export default PageNum;
