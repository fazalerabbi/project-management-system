import React from 'react';
import App from '../../App';

class Profile extends React.Component {
    render(){
        return(
            <App>
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                            <div className="title_left">
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    <div className="row">
                        {/*Update Profile*/}
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Profile</h2>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="x_content">
                                    <br />
                                    <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">

                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">First Name <span className="required">*</span>
                                            </label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="first-name" required="required" className="form-control col-md-7 col-xs-12" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="last-name">Last Name <span className="required">*</span>
                                            </label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="last-name" name="last-name" required="required" className="form-control col-md-7 col-xs-12" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">Middle Name / Initial</label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Gender</label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div id="gender" className="btn-group" data-toggle="buttons">
                                                    <label className="btn btn-default" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                                        <input type="radio" name="gender" value="male" /> &nbsp; Male &nbsp;
                                                    </label>
                                                    <label className="btn btn-primary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                                        <input type="radio" name="gender" value="female" /> Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Date Of Birth <span className="required">*</span>
                                            </label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <input id="birthday" className="date-picker form-control col-md-7 col-xs-12" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div className="ln_solid"></div>
                                        <div className="form-group">
                                            <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                <button className="btn btn-primary" type="button">Cancel</button>
                                                <button className="btn btn-primary" type="reset">Reset</button>
                                                <button type="submit" className="btn btn-success">Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*Update Password*/}
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Update Password</h2>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="x_content">
                                    <br />
                                    <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">

                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">First Name <span className="required">*</span>
                                            </label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="first-name" required="required" className="form-control col-md-7 col-xs-12" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="last-name">Last Name <span className="required">*</span>
                                            </label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" id="last-name" name="last-name" required="required" className="form-control col-md-7 col-xs-12" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="middle-name" className="control-label col-md-3 col-sm-3 col-xs-12">Middle Name / Initial</label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <input id="middle-name" className="form-control col-md-7 col-xs-12" type="text" name="middle-name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Gender</label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div id="gender" className="btn-group" data-toggle="buttons">
                                                    <label className="btn btn-default" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                                        <input type="radio" name="gender" value="male" /> &nbsp; Male &nbsp;
                                                    </label>
                                                    <label className="btn btn-primary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                                        <input type="radio" name="gender" value="female" /> Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Date Of Birth <span className="required">*</span>
                                            </label>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <input id="birthday" className="date-picker form-control col-md-7 col-xs-12" required="required" type="text" />
                                            </div>
                                        </div>
                                        <div className="ln_solid"></div>
                                        <div className="form-group">
                                            <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                <button className="btn btn-primary" type="button">Cancel</button>
                                                <button className="btn btn-primary" type="reset">Reset</button>
                                                <button type="submit" className="btn btn-success">Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </App>
        );
    }
}

export default Profile;