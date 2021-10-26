import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/atoms/pages/Top";
import { Users } from "../components/atoms/pages/Users";
import { DefaulyLayout } from "../components/templetes/DefaultLayout";
import { HeaderOnly } from "../components/templetes/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaulyLayout>
            <Top />
          </DefaulyLayout>
        </Route>
        <Route exact path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
