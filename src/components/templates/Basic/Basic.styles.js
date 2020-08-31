import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: grid;
  background-color: #111;
`;
export const Content = styled.div`
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr;
  gap: 42px;
  padding: 80px 0;
  text-align: center;

  > svg {
    margin: 0 auto;
  }
`;

export const Blobs = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  font-size: 80px;

  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 900px) {
    font-size: 44px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
  @media (max-width: 440px) {
    font-size: 24px;
  }

  > svg {
    position: absolute;

    @media (max-width: 900px) {
      path {
        stroke-width: 5px
      }
    }
  }
  > svg:first-child {
    top: 0;
    left: 0;
    font-size: 3.8em;
    width: 1em;
    height: 0.892em;
  }
  > svg:nth-child(2) {
    top: 0;
    right: 0;
    font-size: 3.47em;
    width: 1em;
    height: 0.641em;
  }
  > svg:nth-child(3) {
    bottom: 0;
    right: 0;
    font-size: 4.12em;
    width: 1em;
    height: 0.862em;
  }
  > svg:nth-child(4) {
    bottom: 0;
    left: 0;
    font-size: 3.47em;
    width: 1em;
    height: 0.738em;
  }
`;

export default null;
