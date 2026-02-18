import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MainLogo from "./assets/main-logo.png";
import TopLogo from "./assets/white-logo.png";
import KrisC from "./assets/kriscammarata.png";
import DanK from "./assets/dankent2.png";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
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
            <Grid container spacing={2} color="white">
              <Grid size={{ xs: 12, md: 6 }}>
                <img src={KrisC} alt="Kris Cammarata" className="headshot" />
                <h4>Kris Cammarata</h4>
                <p>
                  Co-founder of The Contract Lounge and mortgage loan officer
                  with Supreme Lending. A helicopter pilot for 14 years, I bring
                  a calm, detail-driven approach to lending and real estate,
                  focused on smart mortgage solutions and lasting relationships.
                </p>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <img src={DanK} alt="Dan Kent" className="headshot" />
                <h4>Dan Kent</h4>
                <p>
                  Co-founder of The Contract Lounge and South Jersey-based real
                  estate professional and investor. With a background in
                  high-pressure media environments, I bring a clear,
                  relationship-driven approach to real estate, focused on trust,
                  communication, and long-term client partnerships.
                </p>
              </Grid>
            </Grid>
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
            <Box sx={style}>
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
                      backgroundColor: "#0b2c5d",
                      textColor: "white",
                    },
                    {
                      title: "Supreme Lunch & Learn",
                      date: "2026-02-18",
                      url: "https://www.eventbrite.com/e/njhmfa-lunch-learn-real-estate-tickets-1981339321246",
                      target: "_blank",
                      backgroundColor: "#0b2c5d",
                      textColor: "white",
                    },
                    {
                      title: "Supreme Sponsored Event",
                      date: "2026-02-12",
                      url: "https://www.eventbrite.com/e/blackwood-nj-further-together-featuring-female-real-estate-pros-tickets-1980471075299",
                      target: "_blank",
                      backgroundColor: "#0b2c5d",
                      textColor: "white",
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
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              margin="normal"
              color="primary"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white", // text color inside textarea
                  "& fieldset": {
                    borderColor: "white", // default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // border when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // label color when focused
                },
              }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white", // text color inside textarea
                  "& fieldset": {
                    borderColor: "white", // default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // border when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // label color when focused
                },
              }}
            />
            <TextField
              id="number"
              label="Number"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white", // text color inside textarea
                  "& fieldset": {
                    borderColor: "white", // default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // border when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // label color when focused
                },
              }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              margin="normal"
              fullWidth
              placeholder="Let us build your brand"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white", // text color inside textarea
                  "& fieldset": {
                    borderColor: "white", // default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // border when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // label color when focused
                },
              }}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </Modal>
      </main>
      <footer>
        <p>The Contract Lounge 2026 &copy;</p>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            component="a"
            href="https://www.facebook.com/share/g/17x1XJQ7Bp/?mibextid=wwXIfr"
            target="_blank"
            sx={{ color: "white" }}
          >
            <FaFacebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/thecontractlounge.events?igsh=MWphbnppbzl2cWpxaw%3D%3D"
            target="_blank"
            sx={{ color: "white" }}
          >
            <FaInstagram />
          </IconButton>
        </Stack>
      </footer>
    </div>
  );
}

export default App;
