import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import AuthorPage from "./features/author/AuthorPage";
import {TaskPage} from './features/tasks/TaskPage';
import TasksPage from './features/tasks/TasksPage/index';
import { Navigation } from "./Navigation";

export default () => (
    <HashRouter>
    <Navigation />
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                  <Redirect to="/zadania" />
                </Route>
            </Switch>
    </HashRouter>
);