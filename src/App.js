import React, { useState } from "react";
import Main from "./components/Main";
import PageNavbar from "./components/PageNavbar";

const App = () => {
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const [signedIn, setSignedIn] = useState({status:false,data:''});
  const [signInDialog, setSignDialog] =useState(false);

  return (
    <>
      <PageNavbar
        labFunc={setIsLabOpen}
        setIsRegistrationOpen={setIsRegistrationOpen}
        setIsFeaturesOpen={setIsFeaturesOpen}

        setSignDialog={setSignDialog}

        signedIn={signedIn}
        setSignedIn={setSignedIn}
        
      />
      <Main
        isLabOpen={isLabOpen}
        setIsLabOpen={setIsLabOpen}
        setIsRegistrationOpen={setIsRegistrationOpen}
        isRegistrationOpen={isRegistrationOpen}
        isFeaturesOpen={isFeaturesOpen}
        setIsFeaturesOpen={setIsFeaturesOpen}

        signInDialog={signInDialog}
        setSignDialog={setSignDialog}

        setSignedIn={setSignedIn}
        signedIn={signedIn}
      />
    </>
  );
};

export default App;
