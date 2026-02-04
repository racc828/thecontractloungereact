import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import MainLogo from "./assets/main-logo.png";
import TopLogo from "./assets/white-logo.png";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh", // 👈 critical
  display: "flex",
  flexDirection: "column",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
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
          <Button onClick={() => openModal(4)}>CONTACT</Button>
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
          <div>
            <Box sx={style}>
              <Box sx={{ flex: 1, minHeight: 0 }}>
                EVENT
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  height="auto"
                  events={[
                    {
                      title: "The Contract Lounge Event",
                      date: "2026-02-24",
                      url: "https://www.eventbrite.com/e/the-contract-lounge-a-business-networking-happy-hour-tickets-1981498182404",
                      target: "_blank",
                    },
                    {
                      title: "Supreme Lunch & Learn",
                      date: "2026-02-18",
                      url: "https://www.eventbrite.com/e/njhmfa-lunch-learn-real-estate-tickets-1981339321246",
                      target: "_blank",
                    },
                    {
                      title: "Supreme Sponsored Event",
                      date: "2026-02-12",
                      url: "https://www.eventbrite.com/e/blackwood-nj-further-together-featuring-female-real-estate-pros-tickets-1980471075299",
                      target: "_blank",
                    },
                  ]}
                  eventClick={(info) => {
                    info.jsEvent.preventDefault();
                    window.open(
                      info.event.url,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                />
              </Box>
            </Box>
          </div>
        </Modal>

        {/* Modal 4 */}
        <Modal open={activeModal === 4} onClose={closeModal}>
          <Box sx={modalStyle}>
            <Typography variant="h6">CONTACT</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
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
