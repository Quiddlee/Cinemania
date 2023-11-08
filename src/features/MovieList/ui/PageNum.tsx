import addLeadingZero from '../../../shared/lib/helpers/addLeadingZero.ts';

interface IPageNumProps {
  currPage: number;
  maxPage: number;
}

function PageNum({ currPage, maxPage }: IPageNumProps) {
  const currentPage = addLeadingZero(currPage);

  return (
    <span className="flex h-12 min-w-[125px] items-center justify-center rounded-full border-l border-t border-white/20 bg-white/10 px-4 py-1 text-zinc-100 shadow-2xl backdrop-blur-xl backdrop-saturate-200">
      {currentPage} of {maxPage}
    </span>
  );
}

export default PageNum;
