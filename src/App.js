import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import RenderRoutes from "./SurveyInterface/Route/RenderRoutes";
import  MAIN_ROUTES from "./SurveyInterface/Route/MAIN_ROUTES";
import "./SurveyInterface/Assets/css/react-transistions.css";
import { useStores } from './SurveyInterface/hooks/use-stores'
import { observer } from 'mobx-react';
import data from './SurveyInterface/Data/PreInterView/Pages'
import MenuView from "./SurveyInterface/Componets/Views/MenuView";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm:  576,
      md: 768,
      lg: 992,
      xl:1280
    },
  },
})

//// Small tablets and large smartphones (landscape view)
// $screen-sm-min: 576px;

// // Small tablets (portrait view)
// $screen-md-min: 768px;

// // Tablets and small desktops
// $screen-lg-min: 992px;

// // Large tablets and desktops
// $screen-xl-min: 1280px;


//Entry Point Application
function App() {
  const { rootStore } = useStores();
  const uiStore = rootStore.uiStore;
  let style = {
    height : uiStore.windowDimensions.width > 992 ? uiStore.windowDimensions.height : "auto",
  }
  return (
    <MuiThemeProvider theme={theme}>
      <div style={style} className='app-container transition-container'>
          <MenuView store={uiStore}/>
          <RenderRoutes routes={MAIN_ROUTES} />
      </div>
    </MuiThemeProvider>
  );
}

export default observer(App);