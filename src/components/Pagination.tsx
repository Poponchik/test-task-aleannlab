import styles from "../styles/jobBoard.module.css";
import { usePagination, DOTS } from "../hooks/usePagination";
import { Pagination as PaginationType } from "../types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = (props: PaginationType) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    currentPage !== lastPage && onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    currentPage !== 1 && onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange.length - 1];

  return (
    <div className={styles.pages}>
      <IoIosArrowBack
        onClick={onPrevious}
        size={24}
      />
      <hr className={styles.line} />
      <ul className={styles.pages_div}>
        {paginationRange?.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className={styles.page}>&#8230;</li>;
          }

          return (
            <>
              <li
                className={
                  currentPage === pageNumber ? styles.activePage : styles.page
                }
                onClick={() =>
                  typeof pageNumber === "number" && onPageChange(pageNumber)
                }
              >
                {pageNumber}
              </li>
            </>
          );
        })}
      </ul>
      <hr className={styles.line} />
      <IoIosArrowForward
        onClick={onNext}
        size={24}
      />
    </div>
  );
};

export default Pagination;
