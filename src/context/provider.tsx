import { useState } from 'react';
import { UserContext } from './context';

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'));

  const login = (email: string) => {
    localStorage.setItem('user', email);
    setUser(email);
  };

  const logout = () => {
    localStorage.setItem('user', '');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
