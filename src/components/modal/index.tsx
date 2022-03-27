import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface ModalProps {
  isOpen: boolean,
  title: string,
  content: string,
  handleClose: () => void
  actionButtons: React.ReactNode
}

const Modal = ({isOpen, handleClose, actionButtons, content, title}: ModalProps) => {
  return(
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title" sx={{typography: "subtitle1"}}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{typography: "body2", color:"common.black"}}>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {actionButtons}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
