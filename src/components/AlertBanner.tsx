import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const AlertBanner = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#6db04b" }}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        <Typography variant="body1">
          Join us at our next event on April 22 at Double Nickel!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href="https://www.eventbrite.com/e/the-contract-lounge-a-business-networking-happy-hour-april-tickets-1984330598236?aff=erelexpmlt"
          target="_blank"
          sx={{
            color: "white",
            "&:hover": {
              color: "#6DB04B",
            },
          }}
        >
          RSVP
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AlertBanner;
