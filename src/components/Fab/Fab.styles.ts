import styled from '@emotion/styled';

export const StyledFab = styled.button`
  width: 48px;
  height: 48px;
  background-color: ${({ theme: { palette } }) => palette.common.white};
  border-radius: 50%;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
`;

export const StyledFabInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
