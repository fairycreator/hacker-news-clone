import styled, { keyframes, css } from "styled-components";

const blinkAnimation = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`;

const blinkStyle = css`
  animation-name: ${blinkAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`;

export const Animation = styled.div`
  text-align: center;

  span {
    color: ${({ theme }) => theme.textSecondary};
    display: inline-block;
    margin: 0 4px;
    font-size: 80px;
    line-height: 0.1;

    ${blinkStyle}

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
