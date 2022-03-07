]import { Route, Switch, BrowserRouter } from "react-router-dom";
import Banana from "./Banana";
import Chip from "./Chip";
import Cookie from "./Cookie";
import VendingMachine from "./VendingMachine";

function Routes() {
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/chips">
          <Chip />
        </Route>
        <Route exact path="/cookies">
          <Cookie />
        </Route>
        <Route exact path="/bananas">
          <Banana />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default Routes;