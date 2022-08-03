import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './Pages.style.css';

export const FfcPage = () => {
  const { id } = useParams();
  const [selectedDivID, setId] = useState(2);

  const moveLeft = () => {
    if (selectedDivID > 1) {
      setId(selectedDivID - 1);
    }
  };

  const moveRight = () => {
    if (selectedDivID < 3) {
      setId(selectedDivID + 1);
    }
  };

  let selectedDiv;

  return (
    <>
      <div>Choco : {id}</div>

      <LayoutDiv>
        <button onClick={moveLeft}>Left</button>
      </LayoutDiv>
      {selectedDivID === 1 ? (
        <ButtonsDiv>
          <Grid container  rowSpacing={4} columnSpacing={0.5}>
            <Grid item xs={4}>
              <Button variant="contained"  color="primary"    className="inner-btn" component={Link}  to={"/ffc/2"} >
                1
              </Button>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained"  color="primary"    className="inner-btn" component={Link}  to={"/ffc/2"} >
                2
              </Button>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained"  color="primary"    className="inner-btn" component={Link}  to={"/ffc/2"} >
                3
              </Button>
            </Grid>

            <Grid item xs={4}>
            <Button variant="contained"  color="primary"    className="inner-btn" component={Link}  to={"/ffc/2"} >
                4
              </Button>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained"  color="primary"    className="inner-btn" component={Link}  to={"/ffc/2"} >
                5
              </Button>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained"  color="primary"    className="inner-btn" component={Link}  to={"/ffc/2"} >
                6
              </Button>
            </Grid>
          </Grid>
        </ButtonsDiv>
      ) : (
        <></>
      )}
      {selectedDivID === 2 ? <ButtonsDiv>2</ButtonsDiv> : <></>}
      {selectedDivID === 3 ? <ButtonsDiv>3</ButtonsDiv> : <></>}
      <LayoutDiv>
        <button onClick={moveRight}>Right</button>
      </LayoutDiv>
    </>
  );
};

const ButtonsDiv = styled.div`
float: left;
min-width: 600px;
min-height: 200px;
`;

const LayoutDiv = styled.div`
  float: left;
  min-width: 50px;
  min-height: 200px;
  background-color: white;
  margin-left: 50px;
`;
