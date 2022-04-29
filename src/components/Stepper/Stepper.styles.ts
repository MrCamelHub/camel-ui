import styled, { CSSObject } from '@emotion/styled';

export const StyledStepper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StepperItem = styled.span<{
  active: boolean;
}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme: { palette } }) => palette.common.grey['80']};

  ${({ theme: { palette }, active }): CSSObject =>
    active
      ? {
          width: 24,
          borderRadius: 16,
          backgroundColor: palette.primary.main
        }
      : {}}
`;
