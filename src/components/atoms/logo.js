import styled, {
  keyframes
} from 'styled-components';

const rotate360 = keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.div `
  display: inline-block;
  background-image: url(https://res.cloudinary.com/djcd4kmuc/image/upload/v1534363440/Projects/swordman_by_windship.png);
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${rotate360} 30s linear infinite;
  width: 80px;
  height: 80px;
`;

export default Logo;