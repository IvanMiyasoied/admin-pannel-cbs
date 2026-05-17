import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

export default function ConfirmModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to delete this user?</DialogTitle>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button color="error" onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
