// TopRankingProfiles.style.js



export const topRankingContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '20px',
};

export const profileBox = {
  textAlign: 'center',
  margin: '10px',
};

export const rankImage = {
  width: '100px',
  height: '100px',
  margin: '0 auto',  // 가운데 정렬을 위한 스타일 추가
  marginBottom: '10px',
};

export const profileImage = {
  width: '200px',
  height: '200px',
  marginBottom: '10px',
  margin: '0 auto',  // 가운데 정렬을 위한 스타일 추가
};

export const profileText = {
  margin: '5px 0',
  fontSize: '22px', // 기본 폰트 크기
  fontWeight: 'bold', // 굵기
};

export const modalContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
};

export const modalContent = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
};

export const modalProfileImage = {
  width: '100px', // 조절 필요
  height: '100px', // 조절 필요
  borderRadius: '50%',
};

export const modalText = {
  margin: '10px 0',
  fontSize: '18px',
  fontWeight: 'bold',
};

export const closeButton = {
  marginTop: '10px',
  padding: '8px 16px',
  backgroundColor: '#e2e8f0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
