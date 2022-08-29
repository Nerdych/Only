import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Header: React.FC = () => {
  return <StyledHeader>Only.</StyledHeader>;
};
