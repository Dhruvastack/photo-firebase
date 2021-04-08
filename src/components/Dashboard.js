import React, { useEffect, useContext, useState } from "react";

import { Redirect } from "react-router-dom";
import { logOut } from "../firebase";
export default function Dashboard() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
    console.log("instate>>>", file);
    

  };
  return <input type="file" onChange={handleChange} />;
}
