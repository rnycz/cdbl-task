import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { UseStateContextType } from "../assets/types";

const DataModal: React.FC = () => {
  const { openModal, setOpenModal, selectedRow }: UseStateContextType =
    useStateContext();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    boxShadow: 10,
    minWidth: 200,
    p: 5,
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      closeAfterTransition
    >
      <Fade in={openModal}>
        <Box sx={{ ...style, bgcolor: selectedRow?.color }}>
          <CloseIcon
            id="close-modal"
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              cursor: "pointer",
            }}
            onClick={() => setOpenModal(false)}
          />
          {selectedRow && (
            <>
              <Typography id="title" variant="h5" component="h2">
                {selectedRow.id}. {selectedRow.name}
              </Typography>
              <Typography id="year" sx={{ mt: 2 }}>
                Year: {selectedRow.year}
              </Typography>
              <Typography id="color" sx={{ mt: 2 }}>
                Color: {selectedRow.color}
              </Typography>
              <Typography id="pantone" sx={{ mt: 2 }}>
                Pantone: {selectedRow.pantone_value}
              </Typography>
            </>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default DataModal;
