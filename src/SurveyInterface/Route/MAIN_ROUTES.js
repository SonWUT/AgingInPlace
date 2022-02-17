import React from "react";
import LandingPage from "../Pages/LandingPage"
import PreSurveyPage from '../Pages/PreSurveyPage';
import PreInterviewPage from "../Pages/PreInterviewPage";
import DomainPage from "../Pages/DomainPage";
import DomainSurveyPage from "../Pages/DomainSurveyPage";
import ResourcePage from "../Pages/ResourcePage";
import PrivacyPage from "../Pages/PrivacyPage";


const MAIN_ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <LandingPage/> },
    { path: "/pre-survey-info", key: "pre-survey-info", component: () => <PreSurveyPage/>,exact :true,},
    { path: "/pre-interview/:id/", key: "pre-interview-id", exact: true, component: () => <PreInterviewPage/> },
    { path: "/pre-interview/", key: "pre-interview", exact: true, component: () => <PreInterviewPage/> },
    { path: "/domain-page", key: "domain-page", exact: true, component: () => <DomainPage/> },
    { path: "/domain-survey-page", key: "domain-survey-page", exact: true, component: () => <DomainSurveyPage/> },
    { path: "/resources", key: "resources-page", exact: true, component: () => <ResourcePage/> },
    { path: "/privacy-page", key: "privacy-page", exact: true, component: () => <PrivacyPage/> }
  ];
  
   // {
    //   path: "/pre-interview-info",
    //   key: "pre-interview-information",
    //   component: () => <PreSurveyPage/>,
    //   exact :true,
    //   routes: [
    //     // {
    //     //   path: "/app",
    //     //   key: "APP_ROOT",
    //     //   exact: true,
    //     //   component: () => <h1>App Index</h1>,
    //     // },
    //   ],
    // },
  export default MAIN_ROUTES;

 