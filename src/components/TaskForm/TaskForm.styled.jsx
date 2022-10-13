import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: ${p => p.theme.space[2]}px;
`;

export const Field = styled.input`
  flex-grow: 1;
  padding: ${p => p.theme.space[3]}px;
  font: inherit;

  :focus {
    outline-color: #1976d2;
  }
`;
