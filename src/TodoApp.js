import React, { useEffect } from "react";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useTodoState from "./hooks/useTodoState";


function TodoApp() {
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "Ps1TGitUkS8fV6jlp3ASuab0y4CS6mr59ngEoAU6");
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Origin", "http://localhost:3003");

  var raw = '{"custID":"14"}';

  var requestOptions = {
    mode: "cors",
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var data;
  fetch(
    "https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => (data = result))
    .then(() => console.log("data", data))
    .then(window.localStorage.setItem("todos", data))
    .catch((error) => console.log("error", error));

  
  
  const initialTodos = [
    {
        "eGift": false,
        "dateTime": "2020-02-02T06:01:07.684Z",
        "custID": 14,
        "expensesCat": "Shopping",
        "amount": 324.11,
        "message": "",
        "payeeID": 11
    },
    {
        "eGift": true,
        "dateTime": "2020-10-14T12:22:46.533Z",
        "custID": 19,
        "expensesCat": "Entertainment",
        "amount": 733.48,
        "message": "Thanks. :)",
        "payeeID": 14
    },
    {
        "eGift": false,
        "dateTime": "2020-04-02T15:42:50.829Z",
        "custID": 21,
        "expensesCat": "Food",
        "amount": 5.38,
        "message": "",
        "payeeID": 14
    },
    {
        "eGift": true,
        "dateTime": "2020-09-25T01:09:51.676Z",
        "custID": 11,
        "expensesCat": "Shopping",
        "amount": 670.56,
        "message": "Thanks. :)",
        "payeeID": 14
    },
    {
        "eGift": false,
        "dateTime": "2020-07-05T21:47:20.209Z",
        "custID": 14,
        "expensesCat": "Transport",
        "amount": 61.28,
        "message": "",
        "payeeID": 3
    },
    {
        "eGift": true,
        "dateTime": "2020-04-17T06:18:36.248Z",
        "custID": 24,
        "expensesCat": "Transport",
        "amount": 545.24,
        "message": "Thanks. :)",
        "payeeID": 14
    },
    {
        "eGift": false,
        "dateTime": "2020-09-20T04:22:56.632Z",
        "custID": 13,
        "expensesCat": "Entertainment",
        "amount": 549.3,
        "message": "",
        "payeeID": 14
    },
    {
        "eGift": true,
        "dateTime": "2020-04-15T16:05:20.295Z",
        "custID": 14,
        "expensesCat": "Entertainment",
        "amount": 652.09,
        "message": "Thanks. :)",
        "payeeID": 17
    },
    {
        "eGift": true,
        "dateTime": "2020-05-26T08:59:41.051Z",
        "custID": 25,
        "expensesCat": "Shopping",
        "amount": 108.89,
        "message": "Thanks. :)",
        "payeeID": 14
    },
    {
        "eGift": false,
        "dateTime": "2020-03-28T23:10:12.648Z",
        "custID": 18,
        "expensesCat": "Food",
        "amount": 385.24,
        "message": "",
        "payeeID": 14
    }
]
  //const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>Transactions</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          {/* <TodoForm addTodo={addTodo} /> */}
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
