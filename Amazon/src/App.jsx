import React, { useContext, useEffect } from "react";
import Routing from "./Router.jsx";
// import Header from "./Components/Header/Header";
import "./App.css";
// import Footer from "./Components/Footer/Footer.jsx";
// import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/actiontype.js";
import { auth } from "./Utility/Firebase.js";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: Type.SET_USER, user: authUser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}
export default App;
