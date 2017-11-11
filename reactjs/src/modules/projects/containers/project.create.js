import React from 'react';
import App from "../../../App";

class ProjectCrud extends React.Component {
    render() {
        return(
            <App>
                {/*<!-- page content -->*/}
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Form Validation</h3>
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
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Form validation <small>sub title</small></h2>
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

                                        <form className="form-horizontal form-label-left" noValidate>

                                            <p>For alternative validation library <code>parsleyJS</code> check out in the <a href="form.html">form page</a>
                                            </p>
                                            <span className="section">Personal Info</span>

                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Name <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input id="name" className="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" placeholder="both name(s) e.g Jon Doe" required="required" type="text" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="email">Email <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input type="email" id="email" name="email" required="required" className="form-control col-md-7 col-xs-12" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="email">Confirm Email <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input type="email" id="email2" name="confirm_email" data-validate-linked="email" required="required" className="form-control col-md-7 col-xs-12" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="number">Number <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input type="number" id="number" name="number" required="required" data-validate-minmax="10,100" className="form-control col-md-7 col-xs-12" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="website">Website URL <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input type="url" id="website" name="website" required="required" placeholder="www.website.com" className="form-control col-md-7 col-xs-12" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="occupation">Occupation <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input id="occupation" type="text" name="occupation" data-validate-length-range="5,20" className="optional form-control col-md-7 col-xs-12" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label htmlFor="password" className="control-label col-md-3">Password</label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input id="password" type="password" name="password" data-validate-length="6,8" className="form-control col-md-7 col-xs-12" required="required" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label htmlFor="password2" className="control-label col-md-3 col-sm-3 col-xs-12">Repeat Password</label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input id="password2" type="password" name="password2" data-validate-linked="password" className="form-control col-md-7 col-xs-12" required="required" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="telephone">Telephone <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input type="tel" id="telephone" name="phone" required="required" data-validate-length-range="8,20" className="form-control col-md-7 col-xs-12" />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="textarea">Textarea <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <textarea id="textarea" required="required" name="textarea" className="form-control col-md-7 col-xs-12"></textarea>
                                                </div>
                                            </div>
                                            <div className="ln_solid"></div>
                                            <div className="form-group">
                                                <div className="col-md-6 col-md-offset-3">
                                                    <button type="submit" className="btn btn-primary">Cancel</button>
                                                    <button id="send" type="submit" className="btn btn-success">Submit</button>
                                                </div>
                                            </div>
                                        </form>
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
export default ProjectCrud;