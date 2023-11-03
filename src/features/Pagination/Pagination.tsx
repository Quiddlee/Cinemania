import usePagination from './hooks/usePagination.ts';
import Button from './ui/Button.tsx';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

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
    <div className="pointer-events-none absolute h-screen w-screen">
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
