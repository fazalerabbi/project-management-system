import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import projectActions from '../../../actions/project.actions';

import App from '../../../App';
import ProjectItem from '../components/ProjectItem';

class ProjectsListing extends React.Component {
    componentDidMount() {
        this.props.actions.getAllProjects();
    }
    render() {
        let styleWidth1 = {"width": "1%"};
        let styleWidth20 = {"width": "20%"};
        const project = {"_id": "7020nddsjdhad012301230", "name":"Pesamakini Backend UI", "date": "01.01.2015", "progress": "57%"}
        return (
            <App>
                {/*<!-- page content -->*/}
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Projects <small>Listing design</small></h3>
                            </div>

                            <div className="title_right">
                                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Go!</button>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Projects</h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="">Settings 1</a>
                                                    </li>
                                                    <li><a href="">Settings 2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a className="close-link"><i className="fa fa-close"></i></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="x_content">

                                        <p>Simple table with project listing with progress and editing options</p>

                                        {/*<!-- start project list -->*/}
                                        <table className="table table-striped projects">
                                            <thead>
                                            <tr>
                                                <th style={styleWidth1}>#</th>
                                                <th style={styleWidth20}>Project Name</th>
                                                <th>Team Members</th>
                                                <th>Project Progress</th>
                                                <th>Status</th>
                                                <th style={styleWidth20}>#Edit</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>#</td>
                                                <td>
                                                    <a>Pesamakini Backend UI</a>
                                                    <br />
                                                    <small>Created 01.01.2015</small>
                                                </td>
                                                <td>
                                                    <ul className="list-inline">
                                                        <li>
                                                            <img src="/images/user.png" className="avatar" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="/images/user.png" className="avatar" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="/images/user.png" className="avatar" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="/images/user.png" className="avatar" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="project_progress">
                                                    <div className="progress progress_sm">
                                                        <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="57"></div>
                                                    </div>
                                                    <small>57% Complete</small>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-success btn-xs">Success</button>
                                                </td>
                                                <td>
                                                    <a href="" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> View </a>
                                                    <a href="" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Edit </a>
                                                    <a href="" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>
                                                </td>
                                            </tr>
                                            <ProjectItem project={project}></ProjectItem>
                                            </tbody>
                                        </table>
                                       {/* <!-- end project list -->*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- /page content -->*/}
            </App>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...projectActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsListing);