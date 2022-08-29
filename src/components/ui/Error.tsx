import styled from 'styled-components';

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.colors.red}`};
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #f5e9e9;
`;

const Mark = styled.span`
  &::before {
    content: '!';
    display: inline-flex;
    font-size: 14px;
    color: #ee6565;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: #ffc8c8;
    margin-right: 15px;
  }
`;

const ErrorText = styled.p`
  font-size: 14px;
`;

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const Error: React.FC<ErrorProps> = ({ text, ...props }) => {
  return (
    <ErrorWrapper {...props}>
      <Mark />
      <ErrorText>{text}</ErrorText>
    </ErrorWrapper>
  );
};
