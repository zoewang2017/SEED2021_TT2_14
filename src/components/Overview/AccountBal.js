import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { axiosInstance as axiosAuth } from "../../utils/API_Instance";

const useStyles = makeStyles((theme) => ({}));

export default function AccountBal() {
  const classes = useStyles();

  //   const apiParam = {
  //     name: name,
  //     email: email,
  //     password: pass,
  //     role: "user",
  //   };

  const handleSignUp = () => {
    axiosAuth
      .post("/users")
      .then(function (response) {
        console.log(response);
        // if (response.data.success === true) {
        //   history.push("/signin");
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Typography variant="h5" style={{color:'red'}}>Welcome back, Name</Typography>
      <br />
      <Typography variant="subtitle">Your account balance: </Typography>
      <Link onClick={() => handleSignUp()}> click here</Link>
      <br />
      <Link onClick={() => handleSignUp()}> View recent transactions</Link>
    </div>
  );
}
