import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCreateQuestion } from "../util/fetchQuestion";
import { getLoginStatus, checkIfLogined } from "../util/fetchLogin";
import { showToast } from "../components/toast/Toast";
import { Editor } from "../components/editor/Editor";

function QuestionCreate() {
  const navigate = useNavigate();
  const [source, setSource] = useState("baekjoon"); // Default source value
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");


  useEffect(() => {
    try {
      checkIfLogined().then((isLogined) => {
        if(isLogined) {
          console.log(`✅ 로그인 성공`);
        }
        
      });
    } catch (error) {
      console.log(`🛑 ${error}`);
    }
  }, []);

  const onChangeSource = (e) => {
    setSource(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  
  const onClickSubmit = async () => {
    if (title.length < 2) {
      showToast("제목은 최소 2자 이상이어야 합니다.");
    } else if (source.length < 2) {
      showToast("출처는 최소 2자 이상이어야 합니다.");
    } else if (Number(number) < 1000) {
      showToast("문제번호는 1000번 이상이어야 합니다.");
    } else {
      showToast(` 제목: ${title}\n 출처: ${source}\n 번호: ${number}`);
      console.log(` 제목: ${title}\n 출처: ${source}\n 번호: ${number}`);
      await fetchCreateQuestion({ title, source, sourceNo: number }).then((id) => {
        console.log(id);
        navigate(`/problem/${id}`);
      });
    }
  };

  const onClickDiscard = () => {
    const confirmDiscard = window.confirm("정말로 취소하시겠습니까?");
    if (confirmDiscard) {
      showToast("홈 화면으로 이동합니다.");
      navigate("/");
    }
  };

  return (
    <>
      <div className="so-askQuestion">
        <h1 className="p-2 my-8 font-bold text-xxl">문제를 추가해주세요!</h1>

        <div className="mb-8 so-card-info selection:bg-buttonPrimary/50">
  <h2 className="mb-3 text-2xl">문제 추가 방법</h2>
  <p className="text-md">
    이미 등록되어 있지 않은 문제외의{" "}
    <a href="https://www.acmicpc.net/" className="text-secondary-400">
      Baekjoon
    </a>{" "}
    이나 {" "}
    <a href="https://programmers.co.kr/" className="text-secondary-400">
      Programmers
    </a>{" "}
    의 문제를 등록해주세요.
  </p><br></br>
  <h5 className="mb-2 font-bold">Steps</h5>
  <ul className="mb-0 leading-tight list-disc list-inside">
    <li>문제의 제목을 작성해주세요.</li>
    <li>문제의 출처를 선택해주세요.</li>
    <li>문제 번호를 입력해주세요..</li>
    <li>마지막으로, Add problem 버튼을 눌러주세요!</li>
    <br/>
    <p> ※ 백준은 문제번호, 프로그래머스는 URL의 마지막 ID값을 입력해주세요</p>
  </ul>
</div>
        {/* ↑↑ 문제올리는 방법 ↑↑ */}

        
        {/* ↓↓ title 입력 폼 ↓↓ */}
        <div className="mb-6 so-card">
          <h5 className="font-bold">문제 이름</h5>
          <p className="mb-2 text-sm">백준이나 프로그래머스에 등록된 문제 이름을 작성해주세요.</p>
          <div className="flex">
            <input
              id="title"
              name="title"
              type="text"
              maxLength="300"
              placeholder="ex) 습격자 초라기"
              className="w-full px-4 py-2 border rounded border-soGray-light"
              data-min-length="15"
              data-max-length="150"
              onChange={onChangeTitle}
            />
          </div>
        </div>
        {/* ↑↑ title 입력 폼 ↑↑ */}

        {/* ↓↓ Source 입력 폼 (라디오 버튼) ↓↓ */}
      <div className="mb-6 so-card">
        <h5 className="font-bold">출처</h5>
        <p className="mb-2 text-sm">문제의 출처를 선택해주세요.</p>
        <div className="flex">
          <label className="mr-3">
            <input
              type="radio"
              name="source"
              value="백준"
              checked={source === "백준"}
              onChange={onChangeSource}
            />
            백준
          </label>
          <label>
            <input
              type="radio"
              name="source"
              value="프로그래머스"
              checked={source === "프로그래머스"}
              onChange={onChangeSource}
            />
            프로그래머스
          </label>
        </div>
      </div>
      {/* ↑↑ Source 입력 폼 (라디오 버튼) ↑↑ */}

        {/* ↓↓ number 입력 폼 ↓↓ */}
        <div className="mb-6 so-card">
          <h5 className="font-bold">Number</h5>
          <p className="mb-2 text-sm">백준이나 프로그래머스에 등록된 문제 번호를 등록해주세요.</p>
          <div className="flex">
            <input
              id="title"
              name="title"
              type="text"
              maxLength="300"
              placeholder="ex) 1006"
              className="w-full px-4 py-2 border rounded border-soGray-light"
              data-min-length="15"
              data-max-length="150"
              onChange={onChangeNumber}
            />
          </div>
        </div>
        {/* ↑↑ number 입력 폼 ↑↑ */}



        {/* ↓↓ Button ↓↓ */}
        <div className="flex">
          <button
            className="mr-3 so-button-primary"
            type="button"
            autoComplete="off"
            onClick={onClickSubmit}
          >
            Add Problem
          </button>

          <div className="flex--item">
            <button
              className="so-button-dismiss text-danger-700"
              type="button"
              onClick={onClickDiscard}
            >
              cancel
            </button>
          </div>
        </div>
        {/* ↑↑ Button ↑↑ */}

        
      </div>
    </>
  );
}

export default QuestionCreate;
