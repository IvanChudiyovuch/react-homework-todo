import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px 0;
`;

export const Text = styled.p`
  flex-grow: 1;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;

  &:active {
    background-color: #bdbdbd;
  }

  :hover {
    background-color: #e2e5e8;
  }
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
