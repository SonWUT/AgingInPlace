import React from "react";
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import  "../../Assets/sass/Layout/ResourcesLayout.scss";
import HeaderBanner from "../ElementComponet/HeaderBanner";
import HeaderBannerImage from "../../Assets/image/svg/HeaderBanner.svg";



function ResourcesLayout(props) {

      
      let children = Array.isArray(props.children) ? props.children : [props.children]  ;
      return (
        children.length ? 
        <div className='resources-layout'>
        
        <div  className={`inner-layout  `}>
            <Grid className='top-container-header' container  direction="row"  justify="center"  alignItems="center" container >
                    <Grid  align="center" item xs={12} sm={12} md={12} lg={12} xl={12} justify="center"  alignItems="center">
                    <Box 
                        display="flex"
                        justifyContent="center"
                        alignItems = "center"
                        flexDirection="row"
                        >
                         {children[0] ? children[0]  : ""}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}  lg={12} xl={12} justify="center"  alignItems="center">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems = "center"
                        flexDirection="row"
                        >
                         {children[1] ? children[1]  : ""}
                        </Box>
                    </Grid>
            </Grid>
            <Grid className='resources-grid'   container spacing={0} >
                    <Grid item xs={12} sm={12} md={12}  lg={12} xl={12}justify="center"  alignItems="center">
                        {children[2] ? children[2]  : ""}
                    </Grid>
            </Grid>
            <Grid className='resources-grid'   container spacing={0} >
                    <Grid item xs={12} sm={12} md={12}  lg={12} xl={12}justify="center"  alignItems="center">
                        {children[3] ? children[3]  : ""}
                    </Grid>
            </Grid>
        </div></div> : "Layout:No Direct Children To Layout"
    );
  
}

export default observer(ResourcesLayout);
