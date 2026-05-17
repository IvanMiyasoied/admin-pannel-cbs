import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { TableRow, TableCell, Button, Stack } from "@mui/material";

import { deleteUser } from "../features/users/usersSlice";

import ConfirmModal from "../components/ConfirmModal";

export default function UserItem({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    setOpen(false);
  };

  return (
    <>
      <TableRow hover>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>

        <TableCell>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              onClick={() => navigate(`/users/${user.id}`)}
            >
              View
            </Button>

            <Button
              color="error"
              variant="contained"
              onClick={() => setOpen(true)}
            >
              Delete
            </Button>
          </Stack>
        </TableCell>
      </TableRow>

      <ConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
