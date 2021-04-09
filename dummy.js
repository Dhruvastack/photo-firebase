// import React, { useEffect, useContext, useState } from "react";

// import { Redirect } from "react-router-dom";
// import { logOut } from "../firebase";
// export default function Dashboard() {
//   const [file, setFile] = useState(null);

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     console.log(file);
//     setFile(file);
//     console.log("instate>>>", file);
//   };
//   return (
//     <>
//       <input type="file" onChange={handleChange} />
//       <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" />&nbsp;Photos
//     </>
//   );
// }
import React, { useRef, useState } from "react";
import "./Dashboard.css";
import { storage } from "./src/firebase";
// import { useDispatch, useSelector } from "react-redux"
import {
  IconButton,
  Avatar,
  Button,
  Tooltip,
  Typography,
  Snackbar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PublishIcon from "@material-ui/icons/Publish";

import { useHistory } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { signInWithGoogle, logOut } from "./src/firebase";
// import { auth } from "../firebase"
// import useFirestore from "../hooks/useFirestore"

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [file, setFile] = useState(null);

  // const handleClicks = (e) => {
  //   const file = e.target.files;
  //   console.log(file);
  //   setFile(file);
  //   console.log("instate>>>", file);
  // };

  // const dispatch = useDispatch()
  // const history = useHistory()
  // const { uploadPhoto } = useFirestore()
  const fileRef = useRef();
  // const [uploadMessage, setUploadMessage] = useState(null);
  // const user = useSelector(state => state.user)

  // const logout = () => {
  //     auth.signOut()
  //         .then(() => dispatch(setUser(null)))
  //         .catch(err => console.log(err.message))
  // }
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", file);
  const getUploadImages = () => {
    fileRef.current.click();
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    // const file = fileRef.current.files;
    console.log("fileeeeeeeeeeeeeeeeeeeeeeee", file, file.name);
    setFile(file);
    console.log("instate>>>", file);
    //  handleUpload();
    //  if (photos.length === 0) return

    // setUploadMessage(`Uploading ${photos.length} Photo`)
    //  uploadPhoto(photos, setUploadMessage)
  };

  // const goToHomePage = () => history.push(`/`)

  return (
    <div className="nav">
      <div
        className="nav__logo"
        //  onClick={goToHomePage}
      >
        <Typography variant="h5">
          <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" />
          &nbsp;
          <span className="nav__logoText2">Photos</span>
        </Typography>
      </div>

      <div className="nav_search">
        <SearchIcon className="nav__searchIcon" />
        <input
          type="text"
          className="nav__searchInput"
          placeholder="Search your photos"
        />
      </div>

      <div className="nav__right">
        <Button
          style={{ border: "none", outline: "none" }}
          startIcon={<PublishIcon />}
          size="small"
          className="nav__rightUploadBtn"
          // onChange={handleChange}
          onClick={getUploadImages}
        >
          Upload
        </Button>
        {/* <button onclick={handleUpload}>dddd</button> */}
        <IconButton
          style={{ border: "none", outline: "none" }}
          aria-haspopup="true"
          onClick={handleClick}
          //onClick={logOut}
        >
          <Avatar
            className="nav__rightAvatar"
            //src={user.photoURL}
          >
            {/* {user.displayName[0]} */}
          </Avatar>
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
          <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
      </div>

      <input
        type="file"
        onChange={handleUploadImage}
        ref={fileRef}
        multiple
        accept="image/*"
        style={{ display: "none" }}
      />
      <button onclick={handleUpload}> Send</button>
      <div className="output">
        {/* {file &&  <ProgressBar file={file} setFile={file}/>} */}
      </div>
      {/* { uploadMessage && */}
      <Snackbar
        // onClose={() => setUploadMessage(null)}
        autoHideDuration={3000}
        //open={Boolean(uploadMessage)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        //  message={uploadMessage}
      />
      {/* } */}
    </div>
  );
}

export default Dashboard;
