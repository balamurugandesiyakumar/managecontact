import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ManageContact from "./manage-contact/ManageContact";

export default function App() {
    return (
        <Router basename="/managecontact">
            <Switch>
                <Route path="/" exact>
                    <ManageContact />
                </Route>


            </Switch>
        </Router>
    );
}