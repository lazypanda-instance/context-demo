import { useReducer } from "react";
import Header from "../../components/header/Header";

import UserContext, { IContextProvider } from "../../utility/UserContext";
import { UserReducer } from "../../utility/UserReducer";

const MainContainer = () => {

    const [userList, setUserList] = useReducer(UserReducer, []);
    const userContextProvidervalue: IContextProvider = { userList, setUserList};

    return (
        <UserContext.Provider value={userContextProvidervalue}>
            <Header></Header>
        </UserContext.Provider>
    );
}

export default MainContainer;