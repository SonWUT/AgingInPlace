import React from "react";
import { observer } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import  "../../Assets/sass/Layout/PreInterviewLayout.scss"



function PreInterviewLayout(props) {

      let style_bottom = {
        height: 'calc(85% - 2.1rem',
        maxHeight:'calc(85% - 2.1rem)',
        minHeight:'calc(85% - 2.1rem)'
      }
      
      let children = Array.isArray(props.children) ? props.children : [props.children]  ;

      return (
        children.length ? 
        <div className='pre-interview-layout'>
        <div  className={`inner-layout`}>
        <div class='top-header'>
            <Grid  container  direction="row"  justify="center"  alignItems="center"  >
                    <Grid  align="center" item xs={12} sm={12} md={12} lg={4} xl={4} justify="center"  alignItems="center">
                    <Box height="100%"
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        >
                         {children[0] ? children[0]  : ""}
                        </Box>
                       
                    </Grid>
                    <Grid item xs={8} sm={10} md={10}  lg={6} xl={6} justify="center"  alignItems="center">
                    <Box height="100%"
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        >
                         {children[1] ? children[1]  : ""}
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={2} md={2} lg={2} xl={2} justify="center"  alignItems="center">
                    <Box height="100%"
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        >
                         {children[2] ? children[2]  : ""}
                        </Box>
                    </Grid>
            </Grid>
            </div>
            <Grid  style={style_bottom} container spacing={0} >
                    <Grid item xs={12} sm={12} md={4} lg={5} xl={5}>
                        {children[3] ? children[3]  : ""}
                    </Grid>
                    <Grid className='questions-container-item' item xs={12} sm={12} md={7}  xl={7} justify="center"  alignItems="center">
                        {children[4] ? children[4]  : ""}
                    </Grid>
            </Grid>
        </div> </div> : "Layout:No Direct Children To Layout"
    );
  
}

export default observer(PreInterviewLayout);
