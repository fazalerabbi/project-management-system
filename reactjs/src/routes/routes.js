import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardIndex from "../components/dashboard/dashboard";
import Profile from "../components/profile/profile";
import ProjectCrud from "../components/projects/project.create";
import App from "../App";
import ProjectsListing from "../components/projects/projects.listing";
import TasksListing from "../components/tasks/tasks.listing";
import TaskCrud from "../components/tasks/task.create";
import Settings from "../components/settings/settings";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={DashboardIndex}/>
                <Route path="/my/profile" component={Profile}/>
                <Route path="/my/settings" component={Settings}/>
                <Route path="/my/projects" component={ProjectsListing}/>
                <Route path="/my/project/create" component={ProjectCrud}/>
                <Route path="/my/tasks" component={TasksListing}/>
                <Route path="/my/task/create" component={TaskCrud}/>
                <Route path="/" component={App}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;