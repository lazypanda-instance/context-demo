import { createContext } from 'react';
import { UserData } from './UserData';

export interface IContextProvider {
    userList: UserData[];
    setUserList: (arg: UserData) => void
}

const UserContext = createContext<IContextProvider>({} as IContextProvider);
export default UserContext;