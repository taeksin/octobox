import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Viewer } from "@toast-ui/react-editor";
import Sidebar from "../components/aside/Sidebar";
import AnswerList from "../components/answers/AnswerList";
import AnswerCreate from "../components/answers/AnswerCreate";
import Loading from "../components/loading/Loading";
import { relTimeFormat } from "../util/convertor";
import { fetchQuestionDetail } from "../util/fetchQuestion";
import {
  fetchAnswerList,
  fetchUpVote,
  fetchDownVote,
} from "../util/fetchAnswer";
import { showToast } from "../components/toast/Toast";
import { checkIfLogined } from "../util/fetchLogin";

function QuestionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [answerList, setAnswerList] = useState([]);
  const [update, setUpdate] = useState(true);
  const [isPending, setIsPending] = useState(true);
  const [isClickQUpVote, setIsClickQUpVote] = useState(false);
  const [isClickQDownVote, setIsClickQDownVote] = useState(false);
  const getQuestion = (id) => {
    fetchQuestionDetail(id).then((res) => {
      setInfo(res);
    });
  };

  const getAnswer = (id) => {
    fetchAnswerList(id).then((res) => {
      console.log(res);
      setAnswerList(res.content);
    });
  };

  const needUpdate = (flag) => {
    setUpdate(flag);
  };


  const onClickQUpVote = async (id) => {
    if (!(await checkIfLogined())) {
      return;
    }
    setIsClickQUpVote(true);

    fetchUpVote(id).then((message) => {
      if (message) {
        setUpdate(true);
      }
      setIsClickQUpVote(false);
    });
  };

  const onClickQDownVote = async (id) => {
    if (!(await checkIfLogined())) {
      return;
    }
    setIsClickQDownVote(true);
    fetchDownVote(id).then((message) => {
      if (message) {
        setUpdate(true);
      }
      setIsClickQDownVote(false);
    });
  };

  useEffect(() => {
    if (update) {
      getQuestion(id);
      getAnswer(id);
      setUpdate(false);
      setIsPending(false);
    }
  }, [update]);

  if (isPending) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="so-main-wrapper">
      <nav className="sticky max-h-[calc(100vh-180px)] top-[60px] w-[164px] flex-grow-0 flex-shrink-0 basis-[164px]">
        <Sidebar />
      </nav>
      {!isPending && Object.keys(info).length ? (
        <div className="so-main-content max-w-none so-with-one-side">
          <div className="px-8 pt-8 pb-4 mb-3 border-b question-header border-soGray-light">
            <div className="flex justify-between mb-4 question-title">
              <h2 className="row-auto pr-2 font-medium leading-tight break-words text-xxl">
                {info.title}
              </h2>
            </div>

            <div className="flex flex-row text-sm user-info align-center">
              <Link
                to={`/mypage/${info.account.id}`}
                className="flex items-center mr-2"
              >
                {info.account.profile &&
                info.account.profile !== "test/path" ? (
                  <img
                    className="border border-buttonSecondary rounded w-[20px] h-[20px] mr-2"
                    src={info.account.profile}
                    alt={`${info.account.nickname}'s Avatar`}
                  />
                ) : (
                  <span className="border border-buttonSecondary rounded w-[20px] h-[20px] mr-2"></span>
                )}
                <span className="font-semibold text-soGray-darker">
                  {info.account.nickname}
                </span>
              </Link>
              <time className="mr-4 s-user-card--time">
                <span className="mr-1 text-soGray-normal">Solved</span>
                <span
                  className="text-soGray-darker"
                  title={`${info.createdAt.split("T")[0]} ${
                    info.createdAt.split("T")[1].split(".")[0]
                  }`}
                >
                  {relTimeFormat(info.createdAt)}
                </span>
              </time>
              {/* {info && checkIfAuthor(info)} */}
            </div>
          </div>
          <div className="mb-10 question-body">
            <div
              aria-label="question and answers"
              className="flex flex-row p-6"
            >
              <div className="flex flex-col mr-8 vote-group">
                <button
                  className="flex justify-center"
                  aria-label="Up vote"
                  data-status="UP"
                  onClick={() => onClickQUpVote(info.solutionNo)}
                >
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconArrowUpLg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill={isClickQUpVote ? "#f48225" : "#BABFC3"}
                  >
                    <path d="M2 25h32L18 9 2 25Z"></path>
                  </svg>
                </button>
                <div className="flex justify-center my-3">
                  {info ? info.totalVote : ""}
                </div>
                <button
                  className="flex justify-center"
                  aria-label="Down vote"
                  data-status="DOWN"
                  onClick={() => onClickQDownVote(info.solutionNo)}
                >
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconArrowDownLg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill={isClickQDownVote ? "#f48225" : "#BABFC3"}
                  >
                    <path d="M2 11h32L18 27 2 11Z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex-auto question-content">
                {info.url && (
                  <div className="url" style={{ transform: "scale(0.9)", transformOrigin: "0 0" }}>
                    <iframe src={info.url} width="100%" height="700px"></iframe>
                  </div>
                )}

                <Viewer viewer="true" initialValue={info.content} />
              </div>
            </div>
          </div>
          {answerList && (
            <AnswerList
              list={answerList}
              author={info.account.email}
              updated={needUpdate}
            />
          )}
          <AnswerCreate solutionId={info.solutionNo} updated={needUpdate} />
        </div>
      ) : (
        ""
      )}
      
    </div>
  );
}

export default QuestionDetail;
