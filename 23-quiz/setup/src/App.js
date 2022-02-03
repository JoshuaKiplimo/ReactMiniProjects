import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { isLoading, start } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (!start) {
    return <Modal />;
  }
  return <SetupForm />;
}

export default App;
