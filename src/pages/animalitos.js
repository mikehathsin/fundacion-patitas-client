import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { CollapsibleTable } from "../components/CollapsibleTable";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function StateTextFields() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target["name"].value,
      type: e.target["type"].value,
      color: e.target["color"].value,
      rescuePlace: e.target["rescuePlace"].value,
      rescueDate: e.target["rescueDate"].value,
    };
    console.log(data);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        ...style,
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField id="name" label="Nombre" />
      <TextField id="type" label="Tipo" />
      <TextField id="color" label="Color" />
      <TextField id="rescuePlace" label="Lugar del rescate" />
      <TextField id="rescueDate" label="Fecha del rescate" />
      <Button type="submit" variant="contained">
        Registrar animalito
      </Button>
    </Box>
  );
}

export function Animalitos() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack spacing={2}>
      <Box>
        <Button onClick={handleOpen} variant="contained">
          Registrar animalito
        </Button>
      </Box>
      <CollapsibleTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StateTextFields></StateTextFields>
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
    </Stack>
  );
}
