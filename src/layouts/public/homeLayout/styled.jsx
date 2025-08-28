import { Layout } from 'antd'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  position: relative;
  min-height: 100vh;
  color: #000;
  overflow: hidden;

  /* Background: soft blue gradient with subtle radial accents */
  background: radial-gradient(
      1200px 600px at -10% 40%,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.6) 40%,
      rgba(255, 255, 255, 0) 60%
    ),
    radial-gradient(
      900px 500px at 85% -10%,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.4) 45%,
      rgba(255, 255, 255, 0) 60%
    ),
    linear-gradient(180deg, #eef5ff 0%, #e6f0ff 40%, #eaf3ff 100%);

  /* Bottom curved white wave */
  &::after {
    content: '';
    position: absolute;
    left: -5%;
    right: -5%;
    bottom: -6rem;
    height: 12rem;
    background: #fff;
    border-top-left-radius: 60% 100%;
    border-top-right-radius: 60% 100%;
    box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.02) inset;
  }

  /* Small decorative dots */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
        6px 6px at 20% 30%,
        #ffd54f 99%,
        transparent 100%
      ),
      radial-gradient(5px 5px at 75% 40%, #7c4dff 99%, transparent 100%),
      radial-gradient(4px 4px at 65% 70%, #00e5ff 99%, transparent 100%),
      radial-gradient(3px 3px at 90% 80%, #4caf50 99%, transparent 100%);
    pointer-events: none;
    opacity: 0.5;
  }
`
export { StyledLayout }
