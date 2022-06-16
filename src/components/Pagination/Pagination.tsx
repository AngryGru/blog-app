import React, { FC } from "react";
import "./Pagination.css";
import classNames from "classnames";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

type PaginationProps = {
  pageNum: number;
  pagesCount: number;
  onPrevClick: () => void;
  onNextClick: () => void;
};

const Pagination: FC<PaginationProps> = ({
  pageNum,
  pagesCount,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="pagesContainer">
      <button
        className={classNames("pagesBtn", {
          ["inactive"]: pageNum === 1,
        })}
        onClick={onPrevClick}
      >
        <HiOutlineArrowNarrowLeft />
      </button>
      <div className="pagesPageNum">{pageNum}</div>
      <button
        className={classNames("pagesBtn", {
          ["inactive"]: pageNum === pagesCount,
        })}
        onClick={onNextClick}
      >
        <HiOutlineArrowNarrowRight />
      </button>
    </div>
  );
};

export default Pagination;
