import { Grid } from "@mui/material";
import PremierInsurance from "../assets/premierinsurance.png";
import KeysWithSupreme from "../assets/keyswithsupreme.png";
import Midas from "../assets/midas.png";
import Real from "../assets/real.png";
import Nita from "../assets/nita.png";
import RacquelBuilds from "../assets/racquelbuilds.png";

const Sponsors = () => {
  return (
    <>
      <Grid container spacing={2} color="white">
        <Grid size={{ xs: 6, md: 4 }}>
          <a href="https://kriscammarata.supremelendinglo.com/" target="_blank">
            <img
              className="sponsor-img"
              src={KeysWithSupreme}
              alt="Keys With Supreme"
            />
          </a>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <a href="https://danielkentproperties.com/" target="_blank">
            <img className="sponsor-img" src={Real} alt="Real" />
          </a>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <a href="https://thepremierinsurancegroup.com/" target="_blank">
            <img
              className="sponsor-img"
              src={PremierInsurance}
              alt="Premier Insurance"
            />
          </a>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <a href="https://midastransactiongroup.com/" target="_blank">
            <img className="sponsor-img" src={Midas} alt="Midas" />
          </a>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <a
            href="https://nationalintegritytitle.com/why-nita/"
            target="_blank"
          >
            <img className="sponsor-img" src={Nita} alt="Nita" />
          </a>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <img
            className="sponsor-img"
            src={RacquelBuilds}
            alt="Racquel Builds"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Sponsors;
