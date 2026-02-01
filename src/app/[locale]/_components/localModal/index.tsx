"use client";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { LocalModalProps } from "../types/LocalModal";

export default function LocalModal({
  open,
  handleClose,
  children,
  maxWidth = 360,
}: LocalModalProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: maxWidth,
          bgcolor: "var(--color-background-5)",
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
          outline: "none",
          border: "1px solid var(--color-foreground-2)",
        }}
      >
        <IconButton
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 40,
            height: 40,
            bgcolor: "var(--color-background-5)",
            border: "2px solid var(--color-foreground-2)",
            borderRadius: "50%",
            color: "var(--color-foreground-2)",
            "&:hover": {
              bgcolor: "var(--color-background-6)",
              color: "var(--color-primary-1)",
              borderColor: "var(--color-primary-1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
}
