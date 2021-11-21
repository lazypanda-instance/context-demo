
import { useState } from "react";
import "./DropDown.css";

type Props = {
    dataSource: Array<string>,
    callBackSelection: (arg: string) => void
}

const DropDown = (props: Props) => {
    const [userRole, setUserRole] = useState('Your Role');

    const updateUserRoleSelection = (role: string) => {
        props.callBackSelection(role);
        setUserRole(role);
    }

    return (
        <>
            <ul>
                <li className="drop">
                    <a>{userRole}</a>

                    <div className="dropdownContain">
                        <div className="dropOut">
                            <div className="triangle"></div>
                            <ul className="listStyle">
                                {props.dataSource.map(item => (
                                    <li key={item} onClick={() => updateUserRoleSelection(item)}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default DropDown;