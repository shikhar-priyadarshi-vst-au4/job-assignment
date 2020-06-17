import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { styled } from "./App.style";
import Form from "./Form/Form";
import List from "./Users/Users.jsx";
import { connect } from "react-redux";
import { clearall } from "../Redux/listReducer/list.actions";
function App(props) {
  return (
    <Router>
      <header style={styled.nav.header}>
        <Link to={"/user/form"} style={styled.nav.link}>
          User Form
        </Link>
        <Link to={"/users/list"} style={styled.nav.link}>
          Check Your List
        </Link>
        {
          <span
            style={styled.nav.clearall}
            onClick={() => props.dispatch(clearall())}
          >
            Clear all
          </span>
        }
      </header>
      <Switch>
        <Route path={"/user/form"} component={Form} exact />
        <Route path={"/users/list"} component={List} exact />
        <Route
          path={"*"}
          render={() => (
            <div style={styled.defaultWrapper}>
              <div style={styled.default}>Page not Found</div>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default connect()(App);
