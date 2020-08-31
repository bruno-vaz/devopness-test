import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #fff;
  font-size: 20px;

  h1, h2, h3, h4, h5 {
    font-weight: 800;
  }
  h1 {
    margin-bottom: 30px;
    font-size: 32px;
  }

  p {
    margin: 8px 0;
    line-height: 1.62;
  }

  a {
    position: relative;
    z-index: 1;
    display: inline-block;
    max-width: 100%;
    color: var(--main);
    font-weight: 700;
    text-decoration: none;
    word-break: break-all;

    &::before {
      content: '';
      position: absolute;
      top: 1px;
      right: -2px;
      bottom: 1px;
      left: -2px;
      z-index: -1;
      background-color: var(--main-light);
      border-radius: 3px;
    }
  }
`;

export default null;
