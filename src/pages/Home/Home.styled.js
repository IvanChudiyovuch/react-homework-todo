import styled from '@emotion/styled';

export const Container = styled.div`
  minheight: calc(100vh - 50px);
  display: flex;
  alignitems: center;
  justifycontent: center;
`;

export const Title = styled.h1`
  fontweight: ${p => p.theme.fontWeights.bold};
  fontsize: ${p => p.theme.fontSizes.l};
  textalign: center;
`;
