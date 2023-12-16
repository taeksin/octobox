import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import { relTimeFormat } from '../../util/convertor';
import { showToast } from '../toast/Toast';

function AnswerItem({ item }) {



  return (
    <div
      className="flex flex-row px-4 py-5 mx-4 border-soGray-light rounded-md"
    >
      
      <div className="flex-auto question-item">
        <Viewer initialValue={item.content} />
        <div className="flex flex-row justify-end mt-4 text-sm user-info align-center">
          <Link
            to={`/mypage/${item.account.userNo}`}
            className="flex items-center mr-2"
          >
            {item.account.profile && item.account.profile !== 'test/path' ? (
              <img
                className="border border-buttonSecondary rounded w-[20px] h-[20px] mr-2"
                src={item.account.profile}
                alt={`${item.account.nickname}'s Avatar`}
              />
            ) : (
              <span className="border border-buttonSecondary rounded w-[20px] h-[20px] mr-2"></span>
            )}
            <span className="font-semibold text-soGray-darker">
              {item.account.nickname}
            </span>
          </Link>
          <time className="mr-3 s-user-card--time">
            <span className="mr-1 text-soGray-normal">Answered</span>
            <span
              className="text-soGray-darker"
              title={`${item.createdAt.split('T')[0]} ${
                item.createdAt.split('T')[1].split('.')[0]
              }`}
            >
              {relTimeFormat(item.createdAt)}
            </span>
          </time>
        </div>
      </div>
      

    </div>
  );
}

export default AnswerItem;
