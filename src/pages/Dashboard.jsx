import { useState } from "react";
import { useDispatch } from "react-redux";

import { Typography, Button, Paper, Box } from "@mui/material";

import { addUser } from "../features/users/usersSlice";

import Layout from "../components/Layout";
import UserList from "../components/UserList";
import CreateUserModal from "../components/CreateUserModal";

export default function Dashboard() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleCreateUser = (user) => {
    dispatch(addUser(user));
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Users
        </Typography>

        <Button variant="contained" onClick={() => setOpen(true)}>
          Create User
        </Button>
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 4,
        }}
      >
        <UserList />
      </Paper>

      <CreateUserModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreateUser}
      />
    </Layout>
  );
}
