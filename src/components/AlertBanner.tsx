import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const AlertBanner = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#6db04b" }}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        <Typography variant="body1">
          Join us at our next event on March 31st at Village Pub!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href="https://www.eventbrite.com/e/the-contract-lounge-a-business-networking-happy-hour-march-tickets-1983579505698?sg=dd50440ef8e81515309783a500c30a0da3c5bf21047a9b956d0854f27d6bb3a3e9e55b750c3d3b456e5566bad7d3bc058617dd6a382241afb6d769a32c5cf7bea4af201c95b75e12963cefefaa26&aff=ebdsshios"
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
