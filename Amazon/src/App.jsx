
// import "bootstrap/dist/css/bootstrap.min.css";

import { useContext, useEffect } from "react";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import {auth} from './Utility/Firebase'
import { Type } from "./Utility/actiontype";
function App() {
  const [{user},dispatch]=useContext(DataContext)
  useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    console.log(authUser);
    dispatch({
      type:Type.SET_USER,
      user:authUser
    })
  }else {
      dispatch({
        type: Type.SET_USER,
        user:null,
      });
  }
})
  },[])
  return (
     <Routing/> 
  )
}

export default App;
