import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MainLogo from "./assets/main-logo.png";
import TopLogo from "./assets/white-logo.png";
import React from "react";
import { FaTimes } from "react-icons/fa";
import CalendarWrapper from "./components/CalendarWrapper";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#0b2c5d",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  width: {
    xs: "90%", // phones
    sm: 400, // tablets
    md: 600, // small laptops
    lg: 800, // desktops
  },
  maxHeight: "80vh",
  overflowY: "auto",
};

const modalStyleCalendar = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#0b2c5d",
  borderRadius: 2,
  boxShadow: 24,
  px: 1,
  py: 5,
  width: {
    xs: "100%", // phones
    sm: 400, // tablets
    md: 600, // small laptops
    lg: 800, // desktops
  },
  maxHeight: "80vh",
  overflowY: "auto",
};

function App() {
  const [activeModal, setActiveModal] = React.useState<number | null>(null);

  const openModal = (id: number | null) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="wrapper">
      <header>
        <div className="top-logo">
          <img src={TopLogo} />
        </div>
        <div className="line"></div>
        <div className="content">
          <img src={MainLogo} className="main-logo" />
          <p>
            The contract lounge is a modern referral community for local
            business pros - built around monthly curated events, smart
            introductions, and sponsor partners
          </p>
        </div>
        <ButtonGroup
          orientation={isMobile ? "vertical" : "horizontal"}
          variant="outlined"
          aria-label="Basic button group"
          sx={{ mb: 3 }}
        >
          <Button sx={{ px: 6, py: 2 }} onClick={() => openModal(1)}>
            ABOUT
          </Button>
          <Button sx={{ px: 6, py: 2 }} onClick={() => openModal(2)}>
            SPONSORS
          </Button>
          <Button sx={{ px: 6, py: 2 }} onClick={() => openModal(3)}>
            EVENTS
          </Button>
          <Button sx={{ px: 6, py: 2 }} onClick={() => openModal(4)}>
            CONTACT
          </Button>
        </ButtonGroup>
      </header>
      <main>
        {/* Modal 1 */}
        <Modal open={activeModal === 1} onClose={closeModal}>
          <Box sx={modalStyle}>
            <IconButton
              onClick={closeModal}
              color="primary"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <FaTimes size={18} />
            </IconButton>
            <Typography variant="h6" color="white">
              ABOUT
            </Typography>
            <About />
          </Box>
        </Modal>

        {/* Modal 2 */}
        <Modal open={activeModal === 2} onClose={closeModal}>
          <Box sx={modalStyle}>
            <IconButton
              onClick={closeModal}
              color="primary"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <FaTimes size={18} />
            </IconButton>
            <Typography variant="h6" color="white">
              SPONSORS
            </Typography>
            <Typography sx={{ mt: 2 }} color="white">
              Content for modal two.
            </Typography>
          </Box>
        </Modal>

        {/* Modal 3 */}
        <Modal open={activeModal === 3} onClose={closeModal}>
          <div>
            <Box sx={modalStyleCalendar} color="primary">
              <IconButton
                onClick={closeModal}
                color="primary"
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
              >
                <FaTimes size={18} />
              </IconButton>
              <Box sx={{ flex: 1, minHeight: 0 }}>
                <CalendarWrapper />
              </Box>
            </Box>
          </div>
        </Modal>

        {/* Modal 4 */}
        <Modal open={activeModal === 4} onClose={closeModal}>
          <Box sx={modalStyle}>
            <IconButton
              onClick={closeModal}
              color="primary"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <FaTimes size={18} />
            </IconButton>
            <Typography variant="h6" color="primary">
              CONTACT
            </Typography>
            <ContactForm />
          </Box>
        </Modal>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
