import React from "react";
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import  "../../Assets/sass/Layout/PreSurveyLayout.scss";



function PreSurveyLayout(props) {

      let children = Array.isArray(props.children) ? props.children : [props.children];
      children = children.filter(children=>{
          return children;
      })
      return (
        children.length ? 
        <div className='pre-survey-layout'>
        <div  className={`inner-layout  `}>
            <Grid className='full-page-grid-container' container  direction="row"  justify="center"  alignItems="center" container >
                    <Grid  item className='full-page-grid-item' align="center" item xs={4} sm={4} md={4} lg={6} justify="center"  alignItems="center">
                    <Box height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems = "center"
                        flexDirection="row"
                        >
                         {children[0] ? children[0]  : ""}
                        </Box>
                    </Grid>
                    <Grid item className='full-page-grid-item' item xs={8} sm={8} md={8}  lg={6} justify="center"  alignItems="center">
                    <Box height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems = "center"
                        flexDirection="row"
                        >
                         {children[1] ? children[1]  : ""}
                        </Box>
                    </Grid>
            </Grid>
        </div></div> : "Layout:No Direct Children To Layout"
    );
  
}

export default observer(PreSurveyLayout);
