import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return(
        <div>
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                        <li>
                            <NavLink to="/dashboard" activeClassName="active">
                                <i className="fa fa-home"></i> Dashboard
                            </NavLink>
                        </li>
                        <li><a><i className="fa fa-briefcase"></i> Projects <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu">
                                <li><NavLink to="/my/projects" activeClassName="active">My Projects</NavLink></li>
                                <li><NavLink to="/my/project/create" activeClassName="active">Create Project</NavLink></li>
                            </ul>
                        </li>
                        <li><a><i className="fa fa-tasks"></i> Tasks <span className="fa fa-chevron-down"></span></a>
                            <ul className="nav child_menu">
                                <li><NavLink to="/my/tasks" activeClassName="active">My Tasks</NavLink></li>
                                <li><NavLink to="/my/task/create" activeClassName="active">Create Task</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/*<!-- /menu footer buttons -->*/}
            <div className="sidebar-footer hidden-small">
                <a data-toggle="tooltip" data-placement="top" title="Settings">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                    <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Lock">
                    <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                    <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                </a>
            </div>
            {/*<!-- /menu footer buttons -->*/}
        </div>
    );
}

export default SideBar;