import styled from '@emotion/styled';

export const StyledFab = styled.button`
  width: 48px;
  height: 48px;
  background-color: ${({ theme: { palette } }) => palette.common.uiWhite};
  border-radius: 50%;
  box-shadow: ${({
    theme: {
      box: { shadow }
    }
  }) => shadow.modal};
`;

export const StyledFabInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
