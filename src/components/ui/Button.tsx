import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  accent?: boolean;
  casual?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 20px 0;
  font-size: 18px;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ accent }) =>
    accent &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
      width: 100%;
    `}

  ${({ casual }) =>
    casual &&
    css`
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.gray};
      padding-right: 70px;
      padding-left: 70px;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.lightBlue};
    `}
`;
