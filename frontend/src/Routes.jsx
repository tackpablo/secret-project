import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/Home" component={MainPage} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route path="/register" component={Client} />
                <Route path="/login" component={Server} />
            </Switch>
        </div>
    );
}

export default Routes;
