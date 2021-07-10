import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import AuthorPage from "./features/author/AuthorPage";
import {TaskPage} from './features/tasks/TaskPage';
import TasksPage from './features/tasks/TasksPage/index';

export default () => (
    <HashRouter>
    <nav>
        <ul>
            <li>
                <NavLink activeClassName="active" to="/zadania">Zadania</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/autor">O autorze</NavLink>
            </li>
        </ul>
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
    </nav>
    </HashRouter>
);