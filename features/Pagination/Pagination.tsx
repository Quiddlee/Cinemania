import arrowLeft from '@assets/arrow-left.svg';
import arrowRight from '@assets/arrow-right.svg';
import usePagination from '@features/Pagination/hooks/usePagination';
import Button from '@features/Pagination/ui/Button';

function Pagination() {
  const {
    handleNextPage,
    handlePrevPage,
    isPrevDisabled,
    isNextDisabled,
    noPages,
  } = usePagination();

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
