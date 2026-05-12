import { useSelector } from "react-redux";
import UserItem from "../components/UserItem"

export default function UserList() {
    const users = useSelector(state => state.users.list);

    return (
        <div>
            {users.map(user => 
                <UserItem key={user.id} user={user} />
            )}
        </div>
    )
}