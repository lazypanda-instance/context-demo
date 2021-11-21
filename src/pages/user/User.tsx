import { useContext } from "react";
import UserContext from "../../utility/UserContext";
import UserList from "../../components/userList/UserList";
import { UserData } from "../../utility/UserData";

const User = () => {
    const userContext = useContext(UserContext);

    const deleteUser = (user: UserData) => {
        user.actionType = "DELETE";
        userContext.setUserList(user);
    }

    return (
        <div className="fluid-container">
            <h2>Read User context data using <u>useContext hook</u></h2>

            <UserList users={userContext.userList} deleteCallBack={deleteUser}></UserList>
        </div>
    );
}

export default User;