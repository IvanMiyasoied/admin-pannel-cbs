import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { deleteUser } from "../features/users/usersSlice";



export default function UserItem() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            {UserItem.name - UserItem.email}

            <Button onClick={() => navigate(`/users/${UserItem.id}`)}>
                View
            </Button>

            <Button onClick={() => dispatch(deleteUser(UserItem.id))}>
                Delete
            </Button>
        </div>
    )
}