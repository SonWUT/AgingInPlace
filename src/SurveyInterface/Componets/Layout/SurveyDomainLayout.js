import React from "react";
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import  "../../Assets/sass/Layout/SurveyDomainLayout.scss";
import HeaderBanner from "../../Componets/ElementComponet/HeaderBanner";
import HeaderBannerImage from "../../Assets/image/svg/HeaderBanner.svg";
import MobileHeaderBannerImage from "../../Assets/image/svg/HeaderBannerMobile.svg";


function SurveyDomainLayout(props) {

      
      let children = Array.isArray(props.children) ? props.children : [props.children]  ;
      return (
        children.length ? 
        <div className='survey-domain-layout'>
        <HeaderBanner className="domain-survey-page-banner" src={HeaderBannerImage} mobileSrc={MobileHeaderBannerImage}/>
        <div  className={`inner-layout  `}>
            <Grid className='top-container-header' container  direction="row"  justify="center"  alignItems="center" container >
                    <Grid  align="center" item xs={12} sm={12} md={2} lg={2} justify="center"  alignItems="center">
                    <Box height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems = "center"
                        flexDirection="row"
                        >
                         {children[0] ? children[0]  : ""}
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={10} md={9}  lg={9} justify="center"  alignItems="center">
                    <Box height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems = "center"
                        flexDirection="row"
                        >
                         {children[1] ? children[1]  : ""}
                        </Box>
                    </Grid>
                    <Grid item xs={3} sm={2} md={1} lg={1} justify="center"  alignItems="center">
                    <Box height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems = "center"
                        flexDirection="row"
                        >
                         {children[2] ? children[2]  : ""}
                        </Box>
                    </Grid>
            </Grid>
            <Grid   container spacing={0} >
                    <Grid item xs={12} sm={12} md={12}  lg={12}justify="center"  alignItems="center">
                        {children[3] ? children[3]  : ""}
                    </Grid>
            </Grid>
        </div></div> : "Layout:No Direct Children To Layout"
    );
  
}

export default observer(SurveyDomainLayout);
