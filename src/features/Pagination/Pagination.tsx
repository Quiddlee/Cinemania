import { RefObject } from 'react';

import LocomotiveScroll from 'locomotive-scroll';

import usePagination from './hooks/usePagination.ts';
import Button from './ui/Button.tsx';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { PAGE_PARAM } from '../../shared/const/const.ts';
import useScrollTop from '../../shared/hooks/useScrollTop.ts';
import useUrl from '../../shared/hooks/useUrl.ts';

interface IPaginationProps {
  scroll: RefObject<LocomotiveScroll>;
}

function Pagination({ scroll }: IPaginationProps) {
  const {
    handleNextPage,
    handlePrevPage,
    isPrevDisabled,
    isNextDisabled,
    noPages,
  } = usePagination();
  const { readUrl } = useUrl();

  const currPage = Number(readUrl(PAGE_PARAM));

  useScrollTop(currPage, scroll, undefined, currPage);

  if (noPages) return null;

  return (
    <div
      data-scroll="true"
      data-scroll-sticky="true"
      data-scroll-target="section"
      className="pointer-events-none absolute h-screen w-screen">
      <Button
        position="left"
        disabled={isPrevDisabled}
        onClick={handlePrevPage}>
        {arrowLeft}
      </Button>
      <Button
        position="right"
        disabled={isNextDisabled}
        onClick={handleNextPage}>
        {arrowRight}
      </Button>
    </div>
  );
}

export default Pagination;
