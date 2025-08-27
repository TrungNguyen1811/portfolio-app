import { Button } from 'antd'
import styled, { keyframes } from 'styled-components'

const floatUpDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
`

const floatDownUp = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
`

const slowDrift = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0.9; }
  25% { transform: translate(6px, -4px) rotate(1deg); opacity: 1; }
  50% { transform: translate(0, -8px) rotate(-1deg); opacity: 0.95; }
  75% { transform: translate(-6px, -4px) rotate(0.5deg); opacity: 1; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 0.9; }
`

const DivContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .bg-top {
    position: absolute;
  }
  .bg-top-1 {
    top: 0;
    right: 0;
    width: 53.5%;
    height: 113%;
    animation: ${floatUpDown} 2s ease-in-out infinite;
  }
  .bg-top-2 {
    left: -80px;
    bottom: -50%;
    animation: ${floatDownUp} 4s ease-in-out infinite;
  }
  .bg-top-3 {
    left: 0;
    top: -85%;
    animation: ${floatUpDown} 6s ease-in-out infinite;
  }
  .dot-bg-top {
    height: 100%;
    right: 0;
    width: 70%;
    animation: ${slowDrift} 8s linear infinite;
  }
`

const DivBanner = styled.div`
  padding: 0 12rem;
  z-index: 10;

  .text-highline {
    color: #ff984f;
  }
  .img-banner {
    width: 75rem;
    max-width: 95vw;
    height: auto;
    filter: drop-shadow(0 12px 25px rgba(40, 90, 160, 0.18));
  }
`

const StyleButton = styled(Button)`
  padding: 2rem 3rem;
  margin-top: 2rem;
`
export { DivContainer, DivBanner, StyleButton }
