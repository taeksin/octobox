// TopRankingProfiles.js


import chang1 from '../../images/창윤빈1.png';
import chang2 from '../../images/창윤빈.png';
import chang3 from '../../images/창윤빈3.png';
import chang4 from '../../images/창윤빈4.png';
import chang5 from '../../images/창윤빈5.png';
import rank1 from '../../images/1.png';
import rank2 from '../../images/2.png';
import rank3 from '../../images/3.png';
import taekImage from '../../images/김택신-w.png';
import sozipImage from '../../images/전소진1.png';
import newsozipImage from '../../images/newsozipImage.png';
import changImage from '../../images/창윤빈.png';
import silverImage from '../../images/박소은.png';
import newbin from '../../images/윤빈2.png';
import newsilver from '../../images/은2.png';
import taek2 from '../../images/택2.png';
// TopRankingProfiles.js

import React, { useState,useEffect } from "react";
import * as styles from './TopRankingProfiles.style'; // 스타일 파일 import

const rankList = [rank2, rank1, rank3]; // 순서 변경
const devList = [chang1, chang2, chang3, chang4, chang5, taekImage, sozipImage, newsozipImage, changImage, silverImage, taek2]; // 순서 변경

const fixedRankings = {
  python: [
    { rankImage: rank2, profileImage: silverImage, name: 'silver', sentence: '나의 소원은 대한민국의 독립이다.', solutioncount: 30, score: 253 },
    { rankImage: rank1, profileImage: newbin, name: 'Changg', sentence: '백성을 위해 한글을 창제했다.', solutioncount: 68, score: 302 },
    { rankImage: rank3, profileImage: chang1, name: 'Topgun', sentence: '목민심서를 집필했다.', solutioncount: 40, score: 235 },
  ],
};

const TopRankingProfiles = ({ rankings,language: propLanguage }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalProfile, setModalProfile] = useState(null);
  const rearrangedRankings = [rankings[1], rankings[0], rankings[2]];
  const [currentLanguage, setCurrentLanguage] = useState('python');
  const fixedProfiles = fixedRankings[currentLanguage] || [];

  const openModal = (profile) => {
    setModalProfile(profile);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalProfile(null);
  };

  useEffect(() => {
    setModalIsOpen(false);  // 언어가 변경될 때 모달 닫기
  }, [currentLanguage]);

  return (
    <div style={styles.topRankingContainer}>
      {rearrangedRankings.map((player, index) => (
        <div key={index} style={styles.profileBox}>
          <img
            style={styles.rankImage}
            src={rankList[index]}
            alt={`Profile ${index + 1}`}
            onClick={() => openModal(fixedProfiles[index])}
          />
          <img
            style={styles.profileImage}
            src={fixedProfiles[index]?.profileImage}
            alt={`Profile ${index + 1}`}
            onClick={() => openModal(fixedProfiles[index])}
          />
          <p style={styles.profileText}>{`Name: ${fixedProfiles[index]?.name}`}</p>
        </div>
      ))}
      {modalIsOpen && modalProfile && (
        <div style={styles.modalContainer}>
          <div style={styles.modalContent}>
            <img style={styles.modalProfileImage} src={modalProfile.profileImage} alt="Selected Profile" />
            <p style={styles.modalText}>{`Name: ${modalProfile.name}`}</p>
            <div>
              <p style={styles.modalText}>Status Message: <br />{modalProfile.sentence}</p>
              <p style={styles.modalText}>{`🔑: ${modalProfile.solutioncount}`}</p>
              <p style={styles.modalText}>{`👍: ${modalProfile.score}`}</p>
            </div>
            <button style={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TopRankingProfiles;