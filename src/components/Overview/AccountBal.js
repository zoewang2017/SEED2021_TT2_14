import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

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

  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   const [items, setItems] = useState([]);

  //   // Note: the empty deps array [] means
  //   // this useEffect will run once
  //   // similar to componentDidMount()
  //   useEffect(() => {
  //     fetch("https://api.example.com/items")
  //       .then((res) => res.json())
  //       .then(
  //         (result) => {
  //           setIsLoaded(true);
  //           setItems(result);
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //         }
  //       );
  //   }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          Welcome Back!
        </Grid>
        <Grid item xs={12}>
          Your account balances{" "}
        </Grid>
        <Grid item xs={6}>
          Savings Account:{" "}
        </Grid>
        <Grid item xs={6}>
          0
        </Grid>
        <Grid item xs={6}>
          Multiplier Account:{" "}
        </Grid>
        <Grid item xs={6}>
          374.15
        </Grid>
        <Grid item xs={6}>
          Current Account:{" "}
        </Grid>
        <Grid item xs={6}>
          414.9
        </Grid>
      </Grid>

      <Link onClick={() => handleSignUp()}> click here</Link>
      <br />
      <Link onClick={() => handleSignUp()}> View recent transactions</Link>
    </div>
  );
}
