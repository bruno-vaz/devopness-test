import styled from 'styled-components';

export const Wrapper = styled.input`
  background: none;
  display: inline-block;
  width: 300px;
  padding: 0;
  border: 0;
  border-bottom: 2px solid var(--gray-light);
  outline: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-align: center;
  transition: .2s ease-out;
  transition-property: color, border;

  :focus {
    color: var(--main);
    border-color: var(--main);
  }
`;

export default null;
