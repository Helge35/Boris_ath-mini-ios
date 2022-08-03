import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

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
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={4}>
             1
            </Grid>
            <Grid item xs={4}>
             2
            </Grid>
            <Grid item xs={4}>
              3
            </Grid>

            <Grid item xs={4}>
             5
            </Grid>
            <Grid item xs={4}>
             6
            </Grid>
            <Grid item xs={4}>
              7
            </Grid>
          </Grid>
        </ButtonsDiv>
      ) : <></>}
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
  min-width: 200px;
  min-height: 200px;
  background-color: grey;
  margin-left: 50px;
`;

const LayoutDiv = styled.div`
  float: left;
  min-width: 50px;
  min-height: 200px;
  background-color: white;
  margin-left: 50px;
`;
