import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const response = await fetch("https://formspree.io/f/mdalwdyl", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <Typography color="white" variant="h5">
        Thank you! Your message has been sent.
      </Typography>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          variant="filled"
          margin="normal"
          color="primary"
          name="name"
          fullWidth
          required
          type="text"
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
          required
          type="email"
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
          required
          type="tel"
          slotProps={{
            htmlInput: {
              pattern: "[0-9]{10}",
              inputMode: "numeric",
            },
            formHelperText: {
              sx: {
                color: "#fff",
              },
            },
          }}
          helperText="Enter 10 digit phone number"
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
          required
          type="text"
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
