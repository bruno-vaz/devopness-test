import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 20px auto;
  padding: 80px 0;
  text-align: center;
  font-family: monospace, sans-serif;

  > img {
    width: 100%;
    margin-bottom: 20px;

    @media (max-width: 660px) {
      max-width: 260px;
    }
  }
`;

export default null;
