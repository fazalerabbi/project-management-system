import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = (props) => {
    const project = props.project;
    return (
        <tr>
            <td>#</td>
            <td>
                <a>{ project.name }</a>
                <br />
                <small>Created { project.date }</small>
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
                <small>{ project.progress } Complete</small>
            </td>
            <td>
                <button type="button" className="btn btn-success btn-xs">Success</button>
            </td>
            <td>
                <Link className="btn btn-info btn-xs" to={'/my/project/'+project._id} > <i className="fa fa-pencil"></i> Edit </Link>
                {/*<a href="" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Delete </a>*/}
            </td>
        </tr>
    );
}

export default ProjectItem;