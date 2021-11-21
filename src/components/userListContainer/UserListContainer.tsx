import UserContext from "../../utility/UserContext";
import { UserData } from "../../utility/UserData";
import UserList from "../userList/UserList";

type Props = {
    deleteUserCallback: (args: UserData) => void
}

const UserListContainer = (props: Props) => {

    const deleteUserCallback = (user: UserData) => {
        props.deleteUserCallback(user);
    }

    return (
        <UserContext.Consumer>
            {context => (
                <div className="fluid-container">
                <h4>User List read from Context using <u>Consumer</u></h4>
                    <UserList users={context.userList} deleteCallBack={deleteUserCallback}></UserList>
                </div>
            )}
        </UserContext.Consumer>
    );
}

export default UserListContainer;