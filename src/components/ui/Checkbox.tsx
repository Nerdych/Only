import React from 'react';
import styled from 'styled-components';

type StyledInputProps = Omit<CheckboxProps, 'label'>;

const StyledInput = styled.input.attrs<StyledInputProps>(() => ({
  type: 'checkbox',
}))`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const bigFrame = '20px';
const smallFrame = '14px';

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  user-select: none;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: ${bigFrame};
    height: ${bigFrame};
    left: 0;
    border-radius: 4px;
    border: 1px solid #000000;
  }

  ${StyledInput}:checked + &::after {
    border: none;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.blue};
    width: ${smallFrame};
    height: ${smallFrame};
    left: calc((${bigFrame} - ${smallFrame}) / 2);
  }
`;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ label, ...props }, ref) => {
  return (
    <>
      <StyledInput {...props} ref={ref} />
      <Label htmlFor={props.id}>{label}</Label>
    </>
  );
});
