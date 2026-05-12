import { useSelector } from "react-redux";

export default function UserList() {
    const users = useSelector(state => state.users.list);

    return (
        <div>
            {users.map(user => 
                <UserList key={user.id} user={user} />
            )}
        </div>
    )
}