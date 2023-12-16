// ReadMe.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../images/로고_글씨1.png';
import taekImage from '../../images/김택신-w.png';
import sozipImage from '../../images/전소진1.png';
import newsozipImage from '../../images/newsozipImage.png';
import changImage from '../../images/창윤빈.png';
import silverImage from '../../images/박소은.png';
import newbin from '../../images/윤빈2.png';
import newsilver from '../../images/은2.png';
import taek2 from '../../images/택2.png';

import {
  StyledReadMeContainer,
  StyledOctoBox,
  StyledBigText,
  StyledThreeBoxContainer,
  StyledBox,
  StyledReadMeButton,
  StyledReadMeDevImg,
  StyledReadMeTextBox,
  StyledDevImage,
  StyledSpeechBubble,
  StyledDevImageContainer,
} from './ReadMe.style';

const ReadMe = () => {
  // 언어 상태 관리
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);
  const [isHovered1,setIsHovered1] = useState(false);
  const [isHovered2,setIsHovered2] = useState(false);
  const [isHovered3,setIsHovered3] = useState(false);
  const [isHovered4,setIsHovered4] = useState(false);

  const handleLanguageMouseEnter = () => {
    setIsLanguageHovered(true);
  };

  const handleLanguageMouseLeave = () => {
    setIsLanguageHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  // 언어 내용 렌더링 함수
  const renderLanguageContent = () => {
    if (isLanguageHovered) {
      return (
        <>
          <p style={{ fontSize: '20px' }}>Python  C  Java</p>
          <p style={{ fontSize: '20px' }}> C++  Javascript</p>
        </>
      );
    } else {
      return (
        <>
          <p>사용 가능 언어</p>
          <p>5 종류</p>
        </>
      );
    }
  };

  return (
    <StyledReadMeContainer>
      <br />
      <StyledOctoBox>
        <StyledBigText>OCTOBOX</StyledBigText>
      </StyledOctoBox>
      <hr/>

      {/* 전체문제, 전체 이용자, 사용 가능 언어 */}
      <StyledThreeBoxContainer>
        <StyledBox id="allProblem">
          <p>전체 문제</p>
          <p>100 + α 문제</p>
        </StyledBox>

        <StyledBox id="allUsers">
          <p>전체 이용자</p>
          <p>+ 999,999 명</p>
        </StyledBox>

        <StyledBox
          id="allLanguage"
          onMouseEnter={handleLanguageMouseEnter}
          onMouseLeave={handleLanguageMouseLeave}
          style={{ height: '100px' }}
        >
          {renderLanguageContent()}
        </StyledBox>
      </StyledThreeBoxContainer>
      
      {/* 개발자 이미지 및 말풍선 */}
      <StyledReadMeDevImg>
        {/* 개별 개발자 이미지 및 말풍선 */}
        <StyledDevImageContainer>
          <Link to = '/'>
          <StyledDevImage
          src={isHovered1 ? newsozipImage : sozipImage}
          alt="전소진"
          style={{ width: '100%' }}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        />
          {!isHovered1 && (
          <StyledSpeechBubble bottom="95%" left="48%">알고싶은 풀이는<br/>왜 한번에 안 나오는 거야</StyledSpeechBubble>
        )}
          {isHovered1 && (
            <StyledSpeechBubble bottom="95%" left="48%">
            2191193 전소진
          </StyledSpeechBubble>
          )}
          {isHovered1 && (
          <StyledSpeechBubble bottom="-20%" left="50%">
            OCTOBOX에서 문제 해결!
          </StyledSpeechBubble>
          )}
          </Link>
        </StyledDevImageContainer>

        <StyledDevImageContainer>
        <Link to = '/signup'>
        <StyledDevImage
          src={isHovered2 ? newbin : changImage}
          alt="창윤빈"
          style={{ width: '100%' }}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        />
          {!isHovered2 && (
          <StyledSpeechBubble bottom="95%" left="50%">OCTOBOX가<br/>뭐 하는 곳이야?</StyledSpeechBubble>
        )}
          {isHovered2 && (
            <StyledSpeechBubble bottom="95%" left="50%">
            1971214 창윤빈
          </StyledSpeechBubble>
          )}
          {isHovered2 && (
          <StyledSpeechBubble bottom="-20%" left="50%">
            회원가입하고 함께 놀자!
          </StyledSpeechBubble>
          )}
          </Link>
        </StyledDevImageContainer>

        <StyledDevImageContainer>
        <Link to = '/question'>
          <StyledDevImage
          src={isHovered3 ? taek2 : taekImage}
          alt="김택신"
          style={{ width: '100%' }}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        />
          {!isHovered3 && (
          <StyledSpeechBubble bottom="95%" left="50%">문제 번호만 검색하면<br/>다양한 문제 풀이가!</StyledSpeechBubble>
        )}
          {isHovered3 && (
            <StyledSpeechBubble bottom="95%" left="50%">
            1971194 김택신
          </StyledSpeechBubble>
          )}
          {isHovered3 && (
          <StyledSpeechBubble bottom="-20%" left="50%">
            어떤 문제가 있나?
          </StyledSpeechBubble>
          )}
          </Link>
        </StyledDevImageContainer>

        <StyledDevImageContainer>
        <Link to = '/ranking'>
        <StyledDevImage
          src={isHovered4 ? silverImage : newsilver}
          alt="박소은"
          style={{ width: '100%' }}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        />
          {!isHovered4 && (
          <StyledSpeechBubble bottom="95%" left="50%">동기부여가 필요해?<br/>다들 여기로 모여</StyledSpeechBubble>
        )}
          {isHovered4 && (
            <StyledSpeechBubble bottom="95%" left="50%">
            2191189 박소은
          </StyledSpeechBubble>
          )}
          {isHovered4 && (
          <StyledSpeechBubble bottom="-20%" left="50%">
            랭킹을 확인해볼까!
          </StyledSpeechBubble>
          )}
          </Link>
        </StyledDevImageContainer>
      </StyledReadMeDevImg>

      {/* 텍스트 박스 및 버튼 */}
      <StyledReadMeTextBox>
        <p>우리 코딩 문제 해결 커뮤니티에 오신 것을 환영합니다    ❗ </p>
        <p>코딩 문제를 해결하는 동안 어려움(😰)을 겪는다면, 우리 플랫폼이 도움을 드릴 것입니다.</p>
        <p>문제를 검색함으로써 커뮤니티 멤버들에 의해 공유된 다양한 해결책 및 문제에 대한 통찰력을 배울 수 있습니다.</p> 
        <p>여러분의 기여는 소중하며 여러분의 해결책은 커뮤니티의 다른 이들에게 영감을 주고 동기 부여할 수 있습니다.</p> 
        <p>여러분에게 맞는 해결책을 찾아 문제 해결에 도움을 받아보세요    ❗ </p>
      </StyledReadMeTextBox>
      
      {/* 버튼 */}
      <StyledReadMeButton>
        <Link to='/question'>
          <button className='so-button-primary'>Move to Question</button>
        </Link>
      </StyledReadMeButton>
    </StyledReadMeContainer>
  );
};

export default ReadMe;
