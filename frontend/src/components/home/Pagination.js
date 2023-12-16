const Pagination = ({ pageInfo, currentPage, onClickPage }) => {
  return (
    <div className="pagination-container text-center">
      <ul className="w-full flex items-center flex-row justify-center mt-2.5 mb-7 px-4 space-x-1">
        <li
          className={`so-page-item
                ${1 === currentPage && "hidden"}`}
          onClick={() => onClickPage("Prev")}  // 이벤트 핸들러를 li 요소에 적용
        >
          <button>{"<"}</button>
        </li>
        {Array.from({ length: +pageInfo.totalPages }).map((el, i) => {
          return (
            <li
              key={i}
              className={`so-page-item ${
                +currentPage === i + 1
                  ? "bg-primary-400 text-white hover:bg-primary-600"
                  : ""
              }`}
              onClick={() => onClickPage(i + 1)}  // 이벤트 핸들러를 li 요소에 적용
            >
              <button>{i + 1}</button>
            </li>
          );
        })}
        <li
          className={`so-page-item
                ${pageInfo.totalPages === currentPage && "hidden"}`}
          onClick={() => onClickPage("Next")}  // 이벤트 핸들러를 li 요소에 적용
        >
          <button>{">"}</button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
