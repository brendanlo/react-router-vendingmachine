import { Route, Switch, BrowserRouter } from "react-router-dom";
import Banana from "./Banana";
import Chip from "./Chip";
import Cookie from "./Cookie";
import VendingMachine from "./VendingMachine";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/chip">
          <Chip />
        </Route>
        <Route exact path="/cookie">
          <Cookie />
        </Route>
        <Route exact path="/banana">
          <Banana />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;