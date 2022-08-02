import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import './Startup.page.css';

export const StartupPage = () => {
  return (
    <div style={{ marginLeft: "350px" }}>
      <Button  variant="contained" color="primary" className="mainButton" component={Link} to={'/ffc/1'}>
        <div>
          <img src="heli.png" height={150} width={250}></img>
          FFC1
        </div>
      </Button>

      <Button  variant="contained" color="primary" className="mainButton" component={Link} to={'/ffc/2'}>
        <div>
          <img src="heli.png" height={150} width={250}></img>
          FFC2
        </div>
      </Button>

      <Button  variant="contained" color="primary" className="mainButton" component={Link} to={'/ffc'}>
        <div>
          <img src="heli.png" height={150} width={250}></img>
          Maintance
        </div>
      </Button>
    </div>
  );
};
