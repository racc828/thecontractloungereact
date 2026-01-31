import "./App.css";
import { Button, ButtonGroup } from "@mui/material";
import MainLogo from "./assets/main-logo.png";
import TopLogo from "./assets/white-logo.png";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="top-logo">
          <img src={TopLogo} />
        </div>
        <div className="content">
          <img src={MainLogo} className="main-logo" />
          <p>
            The contract lounge is a modern referral community for local
            business pros - built around curated events, smart introductions,
            and sponsor partners
          </p>
        </div>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button> ABOUT US</Button>
          <Button>SPONSORS</Button>
          <Button>EVENTS</Button>
          <Button>REGISTER</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
