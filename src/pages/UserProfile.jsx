import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function UserProfile() {
    const { id } = useParams();

    const user = useSelector(state => 
        state.users.list.find(user => user.id === id)
    )

    if (!user) return <div>User not found</div>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
    
}