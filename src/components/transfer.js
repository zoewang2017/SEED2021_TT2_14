import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import API from "./utils/API";
import { Snackbar, CircularProgress, Grid, Typography, TextField, RadioGroup, FormControlLabel, Radio, InputLabel, Select, Button } from '@material-ui/core';
import axios from 'axios';
import { InputNumber } from 'antd';
import 'antd/dist/antd.css';

const ENDPOINT = "https://us-central1-sandbox-d017b.cloudfunctions.net/api"

const useStyles = makeStyles((theme) =>
  createStyles({
    
  }),
);

export default function Transfer(props) {
    const classes = useStyles({});

    const [loading, setLoading] = React.useState(false);
    const [amount, setAmount] = React.useState(0)
    const [expensesCat, setExpensesCat] = React.useState()
    const [payee, setPayee] = React.useState("")
    const [eGift, seteGift] = React.useState("T")
    const [message, setMessage] = React.useState("")

    React.useEffect(() => {
        axios.defaults.headers.common['x-api-key'] = 'Ps1TGitUkS8fV6jlp3ASuab0y4CS6mr59ngEoAU6'
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = "*"
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = "OPTIONS,POST,GET"
        axios
        .post(`${ENDPOINT}/techtrek2020/users`, {})
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [])

    if(loading) {
        return (
          <div className="App">
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CircularProgress size={200} />
            </div>
          </div>
        )
    } else {
        return (
            <div style={{width: "100%", height: "100%"}}>
                <Grid container>
                  <Grid style={{marginTop: "5px", display: 'flex', justifyContent: 'flex-end'}} item xs={4} sm={4} md={4} lg={4}>
                      <div style={{width: '80%', display: "flex", justifyContent: "flex-start"}}>
                          <Typography style={{textAlign: "left", fontSize: 20, fontWeight: 'bold'}}>Amount:</Typography>
                      </div>
                  </Grid>
                  <Grid style={{marginTop: "5px"}} item xs={8} sm={8} md={8} lg={8}>
                  <div style={{width: '80%', display: "flex", justifyContent: "flex-start"}}>
                    <InputNumber minimum={0} style={{width: "80%"}}  step={1} value={amount} onChange={(number) => {setAmount(number)}} />
                  </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid style={{marginTop: "5px", display: 'flex', justifyContent: 'flex-end'}} item xs={4} sm={4} md={4} lg={4}>
                      <div style={{width: '80%', display: "flex", justifyContent: "flex-start"}}>
                          <Typography style={{textAlign: "left", fontSize: 20, fontWeight: 'bold'}}>Choose payee:</Typography>
                      </div>
                  </Grid>
                  <Grid style={{marginTop: "5px"}} item xs={8} sm={8} md={8} lg={8}>
                  <div style={{width: '80%', display: "flex", justifyContent: "flex-start"}}>
                  <Select
                      native
                      value={payee}
                      onChange={(event) => {setPayee(event.target.value)}}
                      inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                      }}
                    >
                      <option value="" />
                      <option value="Cruickshank">Cruickshank</option>
                      <option value="Buckridge">Buckridge</option>
                      <option value="Leannon">Leannon</option>
                    </Select>
                  </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid style={{marginTop: "5px", display: 'flex', justifyContent: 'flex-end'}} item xs={4} sm={4} md={4} lg={4}>
                    <div style={{width: '80%', display: "flex", justifyContent: "flex-start"}}>
                        <Typography style={{textAlign: "left", fontSize: 20, fontWeight: 'bold'}}>eGift:</Typography>
                    </div>
                  </Grid>
                  <Grid style={{marginTop: "5px"}} item xs={8} sm={8} md={8} lg={8}>
                    <RadioGroup aria-label="gender" name="gender1" value={eGift} onChange={(event) => {seteGift(event.target.value)}}>
                      <FormControlLabel value="T" control={<Radio />} label="Yes" />
                      <FormControlLabel value="F" control={<Radio />} label="No" />
                    </RadioGroup>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid style={{marginTop: "5px", display: 'flex', justifyContent: 'flex-end'}} item xs={4} sm={4} md={4} lg={4}>
                    <div style={{width: '80%', display: "flex", justifyContent: "flex-start"}}>
                        <Typography style={{textAlign: "left", fontSize: 20, fontWeight: 'bold'}}>Message:</Typography>
                    </div>
                  </Grid>
                  <Grid style={{marginTop: "5px"}} item xs={8} sm={8} md={8} lg={8}>
                  <div style={{width: '80%', display: "flex", justifyContent: "flex-start"}}>
                  <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows="4"
                      defaultValue="Default Value"
                      variant="outlined"
                      value = {message}
                      onChange = {(event) => {setMessage(event.target.message)}}
                    />
                  </div>
                  </Grid>
                </Grid>
                <div style={{marginTop: "5px"}}>

                </div>
                <div style={{marginLeft: "120px", width: '80%', display: "flex", justifyContent: "flex-start"}}>
                  <Button variant="contained" color="secondary">
                    Transfer
                  </Button>
                </div>
            </div>
        )
    }
}