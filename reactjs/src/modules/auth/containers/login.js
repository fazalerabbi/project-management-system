import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators }from 'redux';
import { connect } from 'react-redux';

import authActions from '../../../actions/auth.actions';

import App from '../../../App';


class Login extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.actions.signIn(this.state);

    }
    render() {
        if(this.props.auth.success) {
            return <Redirect to="/dashboard" />
        }
        return (
            <App>
                {/*<!-- page content -->*/}
                <div className="right_col" role="main">
                    <div className="">

                        <div className="clearfix"></div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_content">

                                        <form className="form-horizontal form-label-left" onSubmit={this.onSubmit}>


                                            <span className="section">Login</span>

                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="email">User Name <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input type="text" id="username" name="username" required="required" className="form-control col-md-7 col-xs-12" placeholder="User name" onChange={this.onChange}/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="password">Password <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input id="password" className="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="password" placeholder="Password" required="required" type="password" onChange={this.onChange}/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-md-6 col-md-offset-3">
                                                    <button id="send" type="submit" className="btn btn-success">Login</button>
                                                    New to site? &nbsp;&nbsp;
                                                    <Link to="/auth/register" className="to_register">Create Account</Link>
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
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...authActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);