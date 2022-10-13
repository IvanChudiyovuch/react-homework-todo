import styled from '@emotion/styled';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: grid;
  gap: ${p => p.theme.space[2]}px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.m};
`;
