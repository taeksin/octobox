import React, { useState } from 'react';
import '../css/Filter.css';

const Filter = ({ onSelectLanguage }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(''); // 초기값은 빈 문자열이나 기본 언어로 설정

    const handleLanguageSelect = (language) => {
      setSelectedLanguage(language);
      onSelectLanguage(language);
    };
  
    return (
        <div className='mb-8 so-card'>
            <h5 className="font-bold">Filter</h5>
            <p className="mb-2 text-sm">
                문제 풀이에 사용한 언어를 선택 해 주세요.
            </p>
            <label className="filter">
                <input type="radio" name="language" value="python" onChange={() => handleLanguageSelect('python')}/> Python.
            </label>
            <label className="filter">
                <input type="radio" name="language" value="c" onChange={() => handleLanguageSelect('c')}/> C.
            </label>
            <label className="filter">
                <input type="radio" name="language" value="java" onChange={() => handleLanguageSelect('java')}/> Java.
            </label>
            <label className="filter">
                <input type="radio" name="language" value="cpp" onChange={() => handleLanguageSelect('cpp')}/> C++.
            </label>
            <label className="filter">
                <input type="radio" name="language" value="javascript" onChange={() => handleLanguageSelect('javascript')}/> JavaScript.
            </label>
        </div>
    );
};

export default Filter;