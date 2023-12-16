import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCreateSolution } from '../util/fetchQuestion';
import { checkIfLogined } from '../util/fetchLogin';
import { showToast } from '../components/toast/Toast';
import { Editor } from '../components/editor/Editor';
import Filter from '../components/filter/Filter';
import '../components/css/SolutionCreate.css';
function SolutionCreate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [url, setURL] = useState('');
  const [content, setContent] = useState('');
  const navigator = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    try {
      checkIfLogined().then(() => {
        console.log(`✅ 로그인 성공`);
      });
    } catch (error) {
      console.log(`🛑 ${error}`);
    }
  }, []);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeURL = (e) => {
    setURL(e.target.value);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };


  const onChangeContent = (content) => {
    console.log(content)
    setContent(content);
  };

  const onClickDiscard = () => {
    navigator('/question');
  };

  const onClickSubmit = async () => {
    if (title.length < 10) {
      showToast('Minimum 10 characters.');
    } else if (content.length < 50) {
      showToast('Minimum 50 characters.');
    } else {
      await fetchCreateSolution(id, { title, content, url, language: selectedLanguage }).then((id) => {
        console.log(id);
        navigate(`/question/${id}`);
      });
    }
  };


  return (
    <div className="so-askQuestion">
      <h1 className="p-2 my-8 font-bold text-xxl">풀이를 공유해주세요.</h1>
      <div className="mb-8 so-card-info selection:bg-buttonPrimary/50">
        <h2 className="mb-3 text-2xl">좋은 풀이 작성법</h2>
        <p className="text-md">
          이 문제를 푸셨나요? 여러분의 풀이를 공유해 토론하고 평가를 받아 명성을 얻어 보세요. 아래의 지침에 따라 풀이를 공유하면 더 좋은 풀이 공유가 될수 있습니다.
        </p>
        <p className="mb-2 text-md">
          통과하지 못한 코드라고 두려워 하지 마세요. 여러분의 풀이가 새로운 풀이의 길을 여는 열쇠가 될 수 있습니다.
        </p><br></br>
        <h5 className="mb-2 font-bold">Steps</h5>
        <ul className="mb-0 leading-tight list-disc list-inside">
          <li>1. 문제 풀이의 중요 혹은 전체 코드를 공개해주세요.</li>
          <li>2. 문제 풀이의 통과 여부를 기재해주세요. 더 많은 피드백을 얻을 수 있습니다.</li>
          <li>3. 풀이 코드의 접근 방식과 코드 구현을 설명해주세요.</li>
          <li>4. 여러분의 풀이를 개인 블로그를 통해 공유할 수 있습니다. 풀이 URL을 입력해주세요.</li>
          <li>5. 사용한 언어를 선택해주시면, 더 쉽게 여러분의 코드를 찾을 수 있습니다.</li>
        </ul>
      </div>
      <div className="mb-6 so-card">
        <h5 className="font-bold">풀이 제목</h5>
        <p className="mb-2 text-sm">
          여러분의 풀이 방법을 요약하여 간단하게 작성해주세요.
        </p>
        <div className="flex">
          <input
            id="title"
            name="title"
            type="text"
            maxLength="300"
            placeholder="유기농 문어의 DP를 이용한 풀이법"
            className="w-full px-4 py-2 border rounded border-soGray-light"
            data-min-length="15"
            data-max-length="150"
            onChange={onChangeTitle}
          />
        </div>
      </div>
      <div className="mb-7 so-card">
        <h5 className="font-bold">URL</h5>
        <p className="mb-2 text-sm">
          이미 개인 블로그에 풀이를 공유하였다면 URL을 공유해주세요. 
        </p>
        <div className="flex">
          <input
            id="url"
            name="url"
            type="url"
            maxLength="300"
            placeholder="e.g. Share your post link"
            className="w-full px-4 py-2 border rounded border-soGray-light"
            data-min-length="15"
            data-max-length="150"
            onChange={onChangeURL}
          />
        </div>
      </div>
      <Filter onSelectLanguage={handleLanguageSelect} />
      <div className="mb-4 so-card">
        <h5 className="font-bold">여러분의 풀이의 코드와 접근 및 구현에 대한 설명을 해주세요.</h5>
        <p className="mb-4 text-sm">
          설명이 자세할 수록 좋은 평가를 받기 유리할 수 있습니다.
        </p>
        <Editor onChange={onChangeContent} height={'300px'} />
      </div>
      <div className="flex">
        <div className='centercss'>
        <button
          className="mr-3 so-button-primary"
          type="button"
          autoComplete="off"
          onClick={onClickSubmit}
        >
          Review your question
        </button>

        <div className="flex--item">
          <button
            className="so-button-dismiss text-danger-700"
            type="button"
            onClick={onClickDiscard}
          >
            Discard draft
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionCreate;
