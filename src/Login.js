import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
// import Background from './loginpage.jpg';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         GoECache
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const baseURL =
//   "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login";

// const apiKey = "Ps1TGitUkS8fV6jlp3ASuab0y4CS6mr59ngEoAU6";

// const api = "/login";

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPass(event.target.value);
  };

  const handleSignIn = () => {
    if (email === "Group14" && pass === "vwCZEf6EWq9qkF3") {
      history.push("/overview");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleChangeEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangePass}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="red" />}
              label="Remember me"
            /> */}
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="red"
              className={classes.submit}
              onClick={() => handleSignIn()}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
