import { ChangeEvent, FormEvent, useState } from "react";
import DropDown from "./DropDown";
import style from "./UserForm.module.scss";
import { UserData } from "../../utility/UserData";

type Props = {
    user: UserData,
    callBackFormSubmit: (args: UserData) => void
}

const UserForm = (props: Props) => {
    const useFormField = (user: UserData) => {
        const [formFields, setFormFields] = useState<UserData>(user);

        const createChangeHandler = (key: keyof UserData) => (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setFormFields((prev: UserData) => ({ ...prev, [key]: value }));
        }

        const resetFormHandler = () => {
            for (const [key] of Object.entries(user)) {
                setFormFields((prev: UserData) => ({ ...prev, [key]: (key !== 'id') ? '' : 0 }));
            }
        }

        return { formFields, setFormFields, createChangeHandler, resetFormHandler };
    }

    const initialUser: UserData = props.user;
    const { formFields, setFormFields, createChangeHandler, resetFormHandler } = useFormField(initialUser);


    const dropdownData = ["Full stack Developer", "Quality Assurance", "Scrum Manager", "Delivery Manager", "DevOps Engineer", "Data Scientist"];
    const dropdownSelection = (selectedItem: string) => {
        if (formFields) {
            formFields.role = selectedItem;
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!formFields.id) {
            formFields.id = Math.round(Math.random() * 10000);
        }

        props.callBackFormSubmit(formFields);
        resetFormHandler();
    }

    return (
        <div className={style["formContainer"]}>
            <form onSubmit={handleSubmit}>
                <div className="d-flex p-4">
                    <label>Add user:</label>
                    <div className={style["dropdownContainer"]}>
                        <DropDown dataSource={dropdownData} callBackSelection={dropdownSelection}></DropDown>
                    </div>
                    <div className={style["inputContainer"]}>
                        <input type="text" value={formFields.name} onChange={createChangeHandler("name")}></input>
                    </div>
                    <div className={style["submitContainer"]}>
                        <button className="btn btn-danger">Save</button>
                    </div>
                </div>
            </form>
            <hr />
        </div>
    );
}

export default UserForm;