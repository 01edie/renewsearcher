import React from "react";
import Features from "./Features";
import Lab from "./Lab";
import LandingFeatures from "./LandingFeatures";
import RecentCards from "./RecentCards";
import Registration from "./Registration";

const PageManager = ({ isLabOpen, isRegistrationOpen, isFeaturesOpen }) => {
  if (isRegistrationOpen) {
    return (
        <Registration />
      
    );
  }
  if (isLabOpen) {
    return <Lab />;
  }
  if(isFeaturesOpen){
    return(
        <Features/>
    )
  }
  return (
    <>
          {/* features grid */}

        <LandingFeatures />
        {/* landing page recent news cards  container */}

        <RecentCards />
      </>
      
    
  );
};

export default PageManager;
