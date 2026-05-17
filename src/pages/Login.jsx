import { Box, Button, Paper, Typography } from "@mui/material";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5,
          width: 400,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
          }}
        >
          Login
        </Typography>

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </Paper>
    </Box>
  );
}
