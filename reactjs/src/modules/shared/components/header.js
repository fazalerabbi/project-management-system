import React from 'react';

import SideBar from '../components/side-bar';
import TopNavigation from '../components/top-navigation';

import SideBarHelper from '../jquery-helpers/side-bar';

class Header extends React.Component {
    styleBorder = {"border": "0"};
    componentDidMount() {
        SideBarHelper();
    }
    render() {
        return (
            <div>
                <div className="col-md-3 left_col">
                    <div className="left_col scroll-view">
                        <div className="navbar nav_title" style={this.styleBorder}>
                            <a href="index.html" className="site_title">
                                <i className="fa fa-paw"></i> <span>Gentelella Alela!</span>
                            </a>
                        </div>

                        <div className="clearfix"></div>

                        {/*<!-- menu profile quick info -->*/}
                        <div className="profile clearfix">
                            <div className="profile_pic">
                                <img src="/images/img.jpg" alt="..." className="img-circle profile_img" />
                            </div>
                            <div className="profile_info">
                                <span>Welcome,</span>
                                <h2>John Doe</h2>
                            </div>
                        </div>
                        {/*<!-- /menu profile quick info -->*/}
                        <br />
                        {/*<!-- sidebar menu -->*/}
                        <SideBar />
                        {/* <!-- /sidebar menu -->*/}
                    </div>
                </div>
                {/*<!-- top navigation -->*/}
                <TopNavigation />
                {/*<!-- /top navigation -->*/}
            </div>
        );

    }
}
export default Header;