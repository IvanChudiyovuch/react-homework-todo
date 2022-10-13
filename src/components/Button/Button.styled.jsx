import styled from '@emotion/styled';

export const Btn = styled.button`
  display: inline-flex;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #e2e5e8;
  color: inherit;

  &:active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accentFocus};
    color: ${p => p.theme.colors.white};
  }
`;
