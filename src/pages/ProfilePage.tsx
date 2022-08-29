import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/ui/Button';
import { UserContext } from '../context';
import { routes } from '../router/routes';

const ProfileWrapper = styled.main`
  display: grid;
  grid-gap: 50px;
  justify-content: center;
  margin-top: 340px;
`;

const HelloMessage = styled.p`
  font-size: 40px;
  text-align: center;
`;

const UserEmail = styled.span`
  font-weight: 700;
`;

const ExitButton = styled(Button)`
  font-weight: 700;
  margin: 0 auto;
`;

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const onClickLogout = () => {
    logout();
    navigate(routes.LOGIN);
  };

  return (
    <ProfileWrapper>
      <HelloMessage>
        Здравствуйте,&nbsp;
        <UserEmail>{user}</UserEmail>
      </HelloMessage>
      <ExitButton onClick={onClickLogout} casual>
        Выйти
      </ExitButton>
    </ProfileWrapper>
  );
};
