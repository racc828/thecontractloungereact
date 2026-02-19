import { Button, TextField } from "@mui/material";
import React from "react";

const ContactForm = () => {
  const [shrink, setShrink] = React.useState({
    name: false,
    email: false,
    number: false,
    message: false,
  });

  const onFocus = (k: keyof typeof shrink) => () =>
    setShrink((s) => ({ ...s, [k]: true }));
  const onBlur =
    (k: keyof typeof shrink) => (e: React.FocusEvent<HTMLInputElement>) =>
      setShrink((s) => ({ ...s, [k]: Boolean(e.target.value) }));
  return (
    <>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        margin="normal"
        color="primary"
        onFocus={onFocus("name")}
        onBlur={onBlur("name")}
        InputLabelProps={{ shrink: shrink.name }}
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
        onFocus={onFocus("email")}
        onBlur={onBlur("email")}
        InputLabelProps={{ shrink: shrink.email }}
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
        onFocus={onFocus("number")}
        onBlur={onBlur("number")}
        InputLabelProps={{ shrink: shrink.number }}
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
        id="message"
        variant="outlined"
        margin="normal"
        fullWidth
        onFocus={onFocus("message")}
        onBlur={onBlur("message")}
        InputLabelProps={{ shrink: shrink.message }}
        multiline
        rows={4}
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
    </>
  );
};

export default ContactForm;
