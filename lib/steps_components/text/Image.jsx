import styled, { keyframes } from 'styled-components';
import { scale } from '../../common/animations';

// const Image = styled.img`
//   animation: ${scale} 0.3s ease forwards;
//   /* border-radius: ${props => (props.user ? '50% 50% 50% 0' : '50% 50% 0 50%')}; */
//   /* box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px; */
//   height: 40px;
//   min-width: 40px;
//   padding: 3px;
//   transform: scale(0);
//   transform-origin: ${props => (props.user ? 'bottom left' : 'bottom right')};
//   width: 40;
// `;
const rotate = keyframes`
  0 {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(20px);
  }
  100%{
    transform: translateX(0px);
    
  }
`;
const Image = styled.div`
  width: 40px;
  #lower-mouth {
    transition: 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    transform: ${props => (props.animLowerMouth ? 'translateY(15px)' : 'translateY(-15px);')};
  }
  #bot-leaf {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    transform: ${props => (props.animLeaf ? 'rotateZ(0deg)' : 'rotateZ(-10deg)')};
    transform-origin: center;
  }
  #bot-eye {
    animation: ${rotate} 2s linear infinite;
    transform-origin: center center;
  }
`;
export default Image;
