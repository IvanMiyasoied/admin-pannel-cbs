import { Box, Typography, Avatar } from "@mui/material";

export default function Navbar() {
  return (
    <Box
      sx={{
        height: 70,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Typography variant="h6">Dashboard</Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography>Admin</Typography>

        <Avatar>A</Avatar>
      </Box>
    </Box>
  );
}
