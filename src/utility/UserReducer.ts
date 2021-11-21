import { UserData } from "./UserData";

export const UserReducer = (state: any, item: UserData) => {
    switch (item.actionType) {
        case "ADD":
            return [...state, item];
    
        case "DELETE":
            return [
                ...state.filter((user: any) => user.id !== item.id)
            ]

        case "UPDATE":
            break;

        default:
            return state;
    }
}