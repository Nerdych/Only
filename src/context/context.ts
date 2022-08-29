import { createContext } from 'react';

interface IInitialState {
  user: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const initialState: IInitialState = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext<IInitialState>(initialState);
