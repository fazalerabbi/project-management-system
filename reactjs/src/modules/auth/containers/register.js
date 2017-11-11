import React from 'react';
import App from "../../../App";
import { Redirect , Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '../../../actions/auth.actions';

class Register extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.actions.signUp(this.state);
    }
    render() {

        if(this.props.auth.success) {
            return <Redirect to='/auth/login'/>;
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


                                            <span className="section">Register</span>

                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Name <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input id="name" className="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" placeholder="both name(s) e.g Jon Doe" required="required" type="text" onChange={this.onChange}/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="username">User Name <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input id="name" className="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="username" placeholder="user name" required="required" type="text" onChange={this.onChange}/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="email">Email <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input type="email" id="email" name="email" required="required" className="form-control col-md-7 col-xs-12" onChange={this.onChange}/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="email" >Password <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input type="password" id="password" name="password" required="required" className="form-control col-md-7 col-xs-12" onChange={this.onChange}/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-md-6 col-md-offset-3">
                                                    <button id="send" type="submit" className="btn btn-success">Register</button>
                                                    <Link to="/auth/login" className="to_register">Already account?</Link>
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

Register.prototypes = {
    signUp: PropTypes.func.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Register);