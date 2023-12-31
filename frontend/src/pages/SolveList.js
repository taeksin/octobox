import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SidebarRight from '../components/aside/SidebarRight';
import Loading from '../components/loading/Loading';
import Sidebar from '../components/aside/Sidebar';
import Card from '../components/solve/Card';
import Pagination from '../components/home/Pagination';
import { fetchQuestionList, fetchSolutionList } from '../util/fetchQuestion';
import FilterComponent from '../components/filter/FilterComponent';

function SolveList() {
  const { id } = useParams();
  const [questionList, setQuestionList] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [currFilter, setCurrFilter] = useState('newest');
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('');

  const searchText = sessionStorage.getItem('searchText');
  const [isUpdate, setIsUpdate] = useState(true);

  function onFilterClick(e) {
    setCurrPage(1);
    setCurrFilter(e.target.value);
    setIsUpdate(true);
  }

  function onPageChange(e) {
    setCurrPage(e.target);
    console.log(setCurrPage);
    setIsUpdate(true);
  }
  useEffect(() => {
    if (isUpdate) {
      fetchSolutionList(id, currPage, currFilter, searchText, language).then((res) => {
        setQuestionList(res.content);
        setPageInfo(res);
        setSearch(searchText);
        setIsPending(false);
        setIsUpdate(false);
      });

      
    }
  }, [isUpdate]);

  if (isPending) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const onClickPage = (target) => {
    if (target === 'Prev') {
      setCurrPage(currPage - 1);
    } else if (target === 'Next') {
      setCurrPage(currPage + 1);
    } else {
      setCurrPage(+target);
    }
    setIsUpdate(true);
  };

  const handleApplyFilter = (selectedLanguages) => {
    console.log(`Selected Languages: ${selectedLanguages.join(', ')}`);
    // 여기에서 선택된 언어를 이용하여 검색 요청 등의 로직을 수행

    setCurrPage(1);
    setLanguage(selectedLanguages)
    setIsUpdate(true);
  };
  
  return (
    <div className="so-main-wrapper flex flex-col">
      <div className="flex mx-auto my-0 w-[1400px]">
        <nav className="sticky max-h-[calc(100vh-180px)] top-[60px] w-[164px] flex-grow-0 flex-shrink-0 basis-[164px]">
          <Sidebar />
        </nav>
        <div className="so-main-content so-with-both-side border-r-white">
          <div className="flex flex-row items-center justify-between px-6 py-8">
            <h2 className="text-xxl">Solutions</h2>
            <Link to={`/solution/${id}/create`} className="so-button-primary">
              Add Your Solution
            </Link>
          </div>
          <div className="flex items-center px-4 flex-nowrap justify-between mb-4 ">
            <div className="flex px-3 xl">
              {pageInfo.totalElements} solutions
            </div>
            <div className="filter flex">
              <div
                className="inline-flex object-right rounded-md shadow-sm pr-2"
                role="group"
              >
                <button
                  type="button"
                  value="newest"
                  onClick={onFilterClick}
                  className="mr-[-1px] px-3 py-1.5 text-sm text-black bg-white border rounded-l font-regular border-soGray-light hover:bg-soGray-light focus:z-10 focus:bg-soGray-light"
                >
                  Newest
                </button>
                <button
                  type="button"
                  value="vote"
                  onClick={onFilterClick}
                  className="mr-[-1px] px-3 py-1.5 text-sm text-black bg-white border font-regular rounded-lr border-soGray-light hover:bg-soGray-light focus:bg-soGray-light focus:z-10 "
                >
                  Vote
                </button>
                <button
                  type="button"
                  value="unanswered"
                  onClick={onFilterClick}
                  className="px-3 py-1.5 text-sm text-black bg-white border rounded-r font-regular focus:z-10 border-soGray-light hover:bg-soGray-light focus:bg-soGray-light"
                >
                  Unanswered
                </button>
              </div>
            </div>
          </div>
          <FilterComponent onApplyFilter={handleApplyFilter} />
          <div className="mr-8 border-t border-soGray-light">
            {questionList && (
              <div className="questionList">
                {questionList.map((card) => (
                  <Card key={card.solutionNo} item={card} />
                ))}
              </div>
            )}
          </div>
          <div className="border-t border-soGray-light">
            <div className="mt-12">
              {pageInfo && (
                <Pagination
                  currentPage={currPage}
                  pageInfo={pageInfo}
                  setCurrPage={setCurrPage}
                  setIsUpdate={setIsUpdate}
                  onPageChange={onPageChange}
                  onClickPage={onClickPage}
                />
              )}
            </div>
          </div>
        </div>
        <aside className="w-[280px] flex-grow-0 flex-shrink-0 basis-[280px]">
          <SidebarRight />
        </aside>
      </div>
    </div>
  );
}

export default SolveList;