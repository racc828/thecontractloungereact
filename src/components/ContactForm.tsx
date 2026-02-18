import { Button, TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <>
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
        id="message"
        variant="outlined"
        margin="normal"
        fullWidth
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
