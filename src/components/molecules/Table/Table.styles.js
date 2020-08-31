import styled from 'styled-components';

export const Wrapper = styled.div`
  --border-color: var(--main);
  border: 1px solid var(--border-color);
  border-radius: 4px;
`;
export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid var(--border-color);
  text-align: left;

  > *:first-child {
    border-right: 1px solid var(--border-color);
  }
`;
export const Header = styled(Columns)`
  position: sticky;
  top: 0;
  background-color: var(--border-color);
  color: #000;
`;
export const Column = styled.div`
  padding: 20px;
  font-family: monospace, sans-serif;
`;
export const Title = styled.div`
  font-family: 'Mulish', sans-serif;
  font-size: 20px;
  font-weight: 800;
`;

export default null;
