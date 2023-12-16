// Styled components import
import styled from 'styled-components';

// Container styles
export const StyledReadMeContainer = styled.div`
  margin: 10px;
  margin-left: 15px;
`;

// OCTOBOX styles
export const StyledOctoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

// Shared box styles
const sharedBoxStyles = `
  background-color: #FFE6C7;
  padding: 20px;
  border-radius: 10px;
  font-size: 16px;
`;

// Text box styles
export const StyledTextBox = styled.div`
  ${sharedBoxStyles}
`;

// Big text styles
export const StyledBigText = styled.div`
  font-size: 70px;
  font-weight: bold;
  padding: 0 30px;
`;

// Info box styles
export const StyledInfoBox = styled.div`
  ${sharedBoxStyles}
`;

// Three box container styles
export const StyledThreeBoxContainer = styled.div`
  display: flex;
  margin: 10px;
  margin-top: 30px;
  justify-content: space-between;
`;

// Individual box styles
export const StyledBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px; 
  ${sharedBoxStyles}

  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.2);
    background-color: #ffdaac;
  }

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// ReadMe button styles
export const StyledReadMeButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

// Developer image container styles
export const StyledReadMeDevImg = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 110px;
  font-size: 18px;
  position: relative;
`;

// ReadMe text box styles
export const StyledReadMeTextBox = styled.div`
  background-color: #FFE6C7;
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

// Developer image styles
export const StyledDevImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

// Speech bubble styles
export const StyledSpeechBubble = styled.div`
  position: absolute;
  font-size: 16px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  bottom: ${(props) => props.bottom || '120%'};
  left: ${(props) => props.left || '50%'};
  transform: translateX(-50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Developer image container styles with transform transition
export const StyledDevImageContainer = styled.div`
  position: relative;
  width: 100%;
  transition: transform 0.3s;

  &:hover {
      transform: scale(1.1);
  }
`;
