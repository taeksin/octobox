import { useState } from 'react';
import { Editor } from '../editor/Editor';
import { checkIfLogined } from '../../util/fetchLogin';
import { fetchCreateAnswer } from '../../util/fetchAnswer';
import { showToast } from '../toast/Toast';

function AnswerCreate({ solutionId , updated }) {
  const [content, setContent] = useState('');
  const [isEditorClear, setIsEditorClear] = useState(false);

  const onChangeContent = (content) => {
    setContent(content);
  };

  const onClickSubmit = async () => {
    
    if (content.length < 10) {
      showToast('Minimum 10 characters.');
    } else {
      checkIfLogined().then(() => {
        fetchCreateAnswer(solutionId, { content }).then(() => {
          setIsEditorClear(true);
          updated(true);
        });
      });
    }
  };

  return (
    <div className="p-4">
      <Editor
        onChange={onChangeContent}
        height={'300px'}
        isEditorClear={isEditorClear}
        setIsEditorClear={setIsEditorClear}
      />
      <div className="flex">
        <button
          className="mr-3 so-button-primary"
          type="button"
          autoComplete="off"
          onClick={onClickSubmit}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default AnswerCreate;
