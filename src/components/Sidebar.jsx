import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 260,
        backgroundColor: "#111827",
        color: "white",
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: "bold",
        }}
      >
        Admin Panel
      </Typography>

      <List>
        <ListItemButton
          sx={{
            borderRadius: 2,
            mb: 1,
          }}
          onClick={() => navigate("/dashboard")}
        >
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          sx={{
            borderRadius: 2,
          }}
        >
          <ListItemText primary="Users" />
        </ListItemButton>
      </List>
    </Box>
  );
}
