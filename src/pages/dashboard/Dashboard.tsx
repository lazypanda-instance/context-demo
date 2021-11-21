import { useContext, useState, useEffect } from "react";
import UserForm from "../../components/userForm/UserForm";
import { UserData } from "../../utility/UserData";
import UserContext from "../../utility/UserContext";
import UserList from "../../components/userList/UserList";
import UserListContainer from "../../components/userListContainer/UserListContainer";

const Dashboard = () => {
    const defaultUser: UserData = {
        id: 0,
        role: "",
        name: ""
    }
    const [user, setUser] = useState<UserData>(defaultUser);

    // get context
    const { userList, setUserList } = useContext(UserContext);

    // Add user data into UserContext
    const formSubmit = (user: UserData) => {
        user.actionType = "ADD";
        setUserList(user);
    }

    // Delete user data into UserContext
    const deleteUser = (user: UserData) => {
        user.actionType = "DELETE";
        setUserList(user);
    }

    return (
        <div className="fluid-container">
            <div className="row">
                <div className="col-6">
                    <UserForm user={user} callBackFormSubmit={formSubmit}></UserForm>
                    <UserList users={userList} deleteCallBack={deleteUser}></UserList>
                </div>
                <div className="col-6">
                    <UserListContainer deleteUserCallback={deleteUser}></UserListContainer>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;