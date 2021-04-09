import React, { useEffect, useContext, useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { signInWithGoogle, logOut } from "../firebase";
import { Redirect } from "react-router-dom";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="container text-center ">
        <>
          <h1 className="mt-5">Google Photos</h1>
          <div className="container mb-5">
            <img src="https://www.google.com/photos/about/static/images/ui/logo-photos.png" />
          </div>

          <Button
            variant="contained"
            color="primary"
            style={{ fontSize: "1.2rem" }}
            onClick={signInWithGoogle}
          >
            Login With Google
          </Button>

          {/* <Button
            variant="contained"
            color="primary"
            style={{ fontSize: "1.2rem" }}
            onClick={logOut}
          >
            Logout
          </Button> */}
        </>
      </div>
    </>
  );
};
