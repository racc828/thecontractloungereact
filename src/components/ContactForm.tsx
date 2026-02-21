import { Button, TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <>
      <form action="https://formspree.io/f/mdalwdyl" method="POST">
        <TextField
          id="name"
          label="Name"
          variant="filled"
          margin="normal"
          color="primary"
          name="name"
          fullWidth
          sx={{
            "& .MuiFilledInput-root": {
              color: "#ffffff",
              // default underline
              "&:before": {
                borderBottomColor: "#ccc",
              },

              // hover underline
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottomColor: "#fff",
              },

              // focused underline (THIS is when you click)
              "&:after": {
                borderBottomColor: "#6DB04B", // your color
              },
            },
            "& .MuiFilledInput-input": {
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
          }}
        />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          margin="normal"
          fullWidth
          name="email"
          sx={{
            "& .MuiFilledInput-root": {
              color: "#ffffff",
              // default underline
              "&:before": {
                borderBottomColor: "#ccc",
              },

              // hover underline
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottomColor: "#fff",
              },

              // focused underline (THIS is when you click)
              "&:after": {
                borderBottomColor: "#6DB04B", // your color
              },
            },
            "& .MuiFilledInput-input": {
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
          }}
        />
        <TextField
          id="number"
          label="Number"
          variant="filled"
          margin="normal"
          fullWidth
          name="number"
          sx={{
            "& .MuiFilledInput-root": {
              color: "#ffffff",
              // default underline
              "&:before": {
                borderBottomColor: "#ccc",
              },

              // hover underline
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottomColor: "#fff",
              },

              // focused underline (THIS is when you click)
              "&:after": {
                borderBottomColor: "#6DB04B", // your color
              },
            },
            "& .MuiFilledInput-input": {
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
          }}
        />
        <TextField
          label="Message"
          id="message"
          variant="filled"
          margin="normal"
          fullWidth
          name="message"
          multiline
          rows={4}
          sx={{
            "& .MuiFilledInput-root": {
              color: "#ffffff",
              // default underline
              "&:before": {
                borderBottomColor: "#ccc",
              },

              // hover underline
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottomColor: "#fff",
              },

              // focused underline (THIS is when you click)
              "&:after": {
                borderBottomColor: "#6DB04B", // your color
              },
            },
            "& .MuiFilledInput-input": {
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
