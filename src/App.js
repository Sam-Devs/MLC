import React from "react";
import { Switch, Route } from "react-router-dom";
import StakingPage from "./pages/StakingPage";
import NewStaking from "./pages/NewStaking";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <StakingPage />
        {/* <NewStaking /> */}
      </Route>
    </Switch>
  );
};

export default App;
