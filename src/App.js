import "./App.css";
import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TextEditor from "./TextEditor";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id" exact>
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
