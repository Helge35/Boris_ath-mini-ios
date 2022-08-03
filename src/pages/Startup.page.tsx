import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import './Pages.style.css';

export const StartupPage = () => {
  return (
    <div style={{marginTop: "50px"}}>
      <Box component="span" m={3} >
      <Button  variant="contained" color="primary" className="mainButton" component={Link} to={'/ffc/1'}>
        <div>
          <img src="heli.png" height={150} width={250}></img>
          FFC1
        </div>
      </Button>
      </Box>
      <Box component="span" m={3} >
      <Button  variant="contained" color="primary" className="mainButton" component={Link} to={'/ffc/2'}>
        <div>
          <img src="heli.png" height={150} width={250}></img>
          FFC2
        </div>
      </Button>
      </Box>
      <Box component="span" m={3} >
      <Button  variant="contained" color="primary" className="mainButton" component={Link} to={'/ffc'}>
        <div>
          <img src="heli.png" height={150} width={250}></img>
          Maintance
        </div>
      </Button>
      </Box>
    </div>
  );
};
