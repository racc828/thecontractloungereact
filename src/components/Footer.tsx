import { IconButton, Stack } from "@mui/material";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <p>The Contract Lounge 2026 &copy;</p>
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton
          component="a"
          href="https://www.facebook.com/share/g/17x1XJQ7Bp/?mibextid=wwXIfr"
          target="_blank"
          sx={{
            color: "white",
            "&:hover": {
              color: "#6DB04B",
            },
          }}
        >
          <FaFacebook />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/thecontractlounge.events?igsh=MWphbnppbzl2cWpxaw%3D%3D"
          target="_blank"
          sx={{
            color: "white",
            "&:hover": {
              color: "#6DB04B",
            },
          }}
        >
          <FaInstagram />
        </IconButton>
      </Stack>
    </>
  );
};

export default Footer;
