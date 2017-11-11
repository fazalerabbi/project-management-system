import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';

import DashboardIndex from '../modules/dashboard/containers/dashboard';
import Profile from '../modules/profile/containers/profile';
import ProjectCrud from '../modules/projects/containers/project.create';
import ProjectsListing from '../modules/projects/containers/projects.listing';
import TasksListing from '../modules/tasks/containers/tasks.listing';
import TaskCrud from '../modules/tasks/containers/task.create';
import Settings from '../modules/settings/containers/settings';
import Login from '../modules/auth/containers/login';
import Register from '../modules/auth/containers/register';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth/login" component={Login}/>
                <Route path="/auth/register" component={Register}/>
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