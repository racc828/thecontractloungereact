import "./App.css";
import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";
import MainLogo from "./assets/main-logo.png";
import TopLogo from "./assets/white-logo.png";
import React from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function App() {
  const [activeModal, setActiveModal] = React.useState<number | null>(null);

  const openModal = (id: number | null) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="wrapper">
      <header>
        <div className="top-logo">
          <img src={TopLogo} />
        </div>
        <div className="content">
          <img src={MainLogo} className="main-logo" />
          <p>
            The contract lounge is a modern referral community for local
            business pros - built around curated events, smart introductions,
            and sponsor partners
          </p>
        </div>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button onClick={() => openModal(1)}> ABOUT US</Button>
          <Button onClick={() => openModal(2)}>SPONSORS</Button>
          <Button onClick={() => openModal(3)}>EVENTS</Button>
          <Button onClick={() => openModal(4)}>REGISTER</Button>
        </ButtonGroup>
      </header>

      <main>
        {/* Modal 1 */}
        <Modal open={activeModal === 1} onClose={closeModal}>
          <Box sx={modalStyle}>
            <Typography variant="h6">ABOUT US</Typography>
            <Typography sx={{ mt: 2 }}>Content for modal one.</Typography>
          </Box>
        </Modal>

        {/* Modal 2 */}
        <Modal open={activeModal === 2} onClose={closeModal}>
          <Box sx={modalStyle}>
            <Typography variant="h6">SPONSORS</Typography>
            <Typography sx={{ mt: 2 }}>Content for modal two.</Typography>
          </Box>
        </Modal>

        {/* Modal 3 */}
        <Modal open={activeModal === 3} onClose={closeModal}>
          <Box sx={modalStyle}>
            <Typography variant="h6">EVENTS</Typography>
            <Typography sx={{ mt: 2 }}>Content for modal three.</Typography>
          </Box>
        </Modal>

        {/* Modal 4 */}
        <Modal open={activeModal === 4} onClose={closeModal}>
          <Box sx={modalStyle}>
            <Typography variant="h6">REGISTER</Typography>
            <Typography sx={{ mt: 2 }}>Content for modal four.</Typography>
          </Box>
        </Modal>
      </main>
      <footer>
        <p>The Contract Lounge 2026 &copy;</p>
      </footer>
    </div>
  );
}

export default App;
