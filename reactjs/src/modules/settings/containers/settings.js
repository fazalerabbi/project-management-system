import React from 'react';

import App from '../../../App';

class Settings extends React.Component {
    render() {
        /*let styleColor          = {"color": "#E74C3C"};*/
        let stylePaddingLeft    = {"paddingLeft": "0px"};
        return (
            <App>

                {/*<!-- page content -->*/}
                <div className="right_col" role="main">
                    <div className="">
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Settings</h3>
                            </div>


                        </div>
                        <div className="clearfix"></div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="">
                                    <div className="x_title">

                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="x_content">
                                        <form className="form-horizontal form-label-left">
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Email notifications <span className="required">*</span></label>
                                            <div className="col-md-7 col-sm-7 col-xs-12">
                                                <select className="form-control" name="email_notification" required >
                                                <option value="all">For any event on all my projects</option>
                                                {/*<!--<option value="selected">For any event on the selected projects only...</option>-->*/}
                                                <option value="only_my_events">Only for things I watch or I'm involved in</option>
                                                <option value="only_assigned">Only for things I am assigned to</option>
                                                <option value="only_owner">Only for things I am the owner of</option>
                                                <option value="none">No events</option>
                                            </select>
                                            {/*<span className="help-desk" style={styleColor}  >Please select email notification settings.</span>*/}
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="checkbox">
                                                <label style={stylePaddingLeft}>
                                                    <input type="checkbox" className="flat" name="no_my_changes_notification" required /> I don't want to be notified of changes that I make myself
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="hide_email">Hide my email address
                                </label>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <div className="checkbox">
                                        <label style={stylePaddingLeft}>
                                            <input type="checkbox" className="flat" id="hide_email" name="hide_email"  />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="ln_solid"></div>
                            <div className="form-group">
                                <div className="col-md-8 col-md-offset-3">
                                    <button id="save" type="submit" className="btn btn-success">Save Settings</button>
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

export default Settings;