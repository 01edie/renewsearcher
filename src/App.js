import React, { useState } from "react";
import Main from "./components/Main";
import PageNavbar from "./components/PageNavbar";

const App = () => {
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  return (
    <>
      <PageNavbar
        labFunc={setIsLabOpen}
        setIsRegistrationOpen={setIsRegistrationOpen}
        setIsFeaturesOpen={setIsFeaturesOpen}
      />
      <Main
        isLabOpen={isLabOpen}
        setIsLabOpen={setIsLabOpen}
        setIsRegistrationOpen={setIsRegistrationOpen}
        isRegistrationOpen={isRegistrationOpen}
        isFeaturesOpen={isFeaturesOpen}
        setIsFeaturesOpen={setIsFeaturesOpen}
      />
    </>
  );
};

export default App;
