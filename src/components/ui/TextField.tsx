import React from 'react';
import styled, { css } from 'styled-components';

interface StyledInputProps extends Omit<TextFieldProps, 'label'> {}

const StyledInput = styled.input<StyledInputProps>`
  font-size: 16px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  outline: none;

  ${({ error }) =>
    error &&
    css`
      caret-color: ${({ theme }) => theme.colors.red};
      border: ${({ theme }) => `1px solid ${theme.colors.red}`};
    `}
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
`;

const Label = styled.label`
  display: grid;
  grid-gap: 10px;
`;

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <Label className={className}>
        {label}
        <StyledInput {...props} error={error} ref={ref} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Label>
    );
  }
);
