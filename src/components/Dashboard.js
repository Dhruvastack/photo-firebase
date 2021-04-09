import React, { useEffect, useContext, useState } from "react";
import ImageGrid from './ImageGrid';
import ProgressBar from './ProgressBar';
import { logOut } from "../firebase";
export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    const selected = e.target.files[0];           // only 1 file so
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError("Please select an image file (pngor jpg)");
    }
  };
  return (
    <>
    <form>
      <input type="file" onChange={changeHandler} />
      <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="error">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={file}/>}
      </div>
      </form>
      {/* &nbsp;Photos */}
    </>
  );
}
