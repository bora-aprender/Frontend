import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Page imports
import Home from "./pages/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
