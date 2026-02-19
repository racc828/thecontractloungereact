import { Grid } from "@mui/material";
import KrisC from "../assets/kriscammarata.png";
import DanK from "../assets/dankent.png";

const About = () => {
  return (
    <>
      <Grid container spacing={2} color="white">
        <Grid size={{ xs: 12, md: 6 }}>
          <img src={KrisC} alt="Kris Cammarata" className="headshot" />
          <h4>Kris Cammarata</h4>
          <p>
            Co-founder of The Contract Lounge and mortgage loan officer with
            Supreme Lending. A helicopter pilot for 14 years, I bring a calm,
            detail-driven approach to lending and real estate, focused on smart
            mortgage solutions and lasting relationships.
          </p>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img src={DanK} alt="Dan Kent" className="headshot" />
          <h4>Dan Kent</h4>
          <p>
            Co-founder of The Contract Lounge and South Jersey-based real estate
            professional and investor. With a background in high-pressure media
            environments, I bring a clear, relationship-driven approach to real
            estate, focused on trust, communication, and long-term client
            partnerships.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
