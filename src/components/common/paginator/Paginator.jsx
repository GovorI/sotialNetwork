import React, { useState } from "react";
import s from "./Paginator.module.css";
import cn from "classnames";

function Paginator({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  portionSize = 10,
}) {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const handlePageChande = (page) => {
    onPageChanged(page);
    setPortionNumber(Math.ceil(page / portionSize));
  };

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          {"<--"}
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(s.pageNumber, {
                [s.selectedPage]: currentPage === p,
              })}
              key={p}
              onClick={(e) => {
                handlePageChande(p);
              }}
            >
              {p + " "}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          {"-->"}
        </button>
      )}
    </div>
  );
}
export default Paginator;
