import { UserData } from "../../utility/UserData";
import styles from "./UserList.module.scss";

type Props = {
    users: UserData[],
    deleteCallBack: (args: UserData) => void
}

const UserList = (props: Props) => {
    return (
        <div>
            <div>
                {props.users.map((item, index) => (
                    <>
                    <div key={index} className={styles["item"]}>
                        <div className={styles["item__add-icon"]}></div>
                        <div className={styles["item__title"]}>{item.name}</div>
                        <div className={styles["item__role"]}>{item.role}</div>
                        <div className={styles["item__delete-icon"]} onClick={() => props.deleteCallBack(item)}></div>
                    </div>
                    <hr></hr>
                    </>
                ))}
            </div>
        </div>
    );
}

export default UserList;