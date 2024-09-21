import React from 'react'
import {PulseLoader} from 'react-spinners'
function Loader() {
  return (
    <div
    style={
        {
            display:"flex",
            alignItems:"Center",
            justifyContent:"center",
            height:"50vh",
        }
    }>
      <PulseLoader />
    </div>
  );
}

export default Loader