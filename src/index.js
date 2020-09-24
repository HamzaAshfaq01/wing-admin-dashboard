/*
 * !Wing-Admin-Dashboard v0.1.0 (https://github.com/tayyab-khalid/wing-react-dashboard-1.git)
 * Licensed under MIT (https://github.com/tayyab-khalid/wing-react-dashboard-1/blob/master/LICENSE)
 * Contact (https://workcorp.herokuapp.com/contact.php)
 */

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/main.scss";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/wing-admin-dashboard/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
