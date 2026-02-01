export type LocalModalProps = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  maxWidth?: number;
};
