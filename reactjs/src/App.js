import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import Header from './modules/shared/components/header';
import Footer from './modules/shared/components/footer';


const BaseComponent = (props) => {
    return (
        <div>
            <Header />
            { props.children }
            <Footer />
        </div>
    );
}

const App = withRouter(props => {
        const token = localStorage.getItem('jwt_token');
        if(token) {
            const currentLocation = props.location.pathname;

            if(currentLocation === '/auth/login' || currentLocation === '/auth/register') {
                return <Redirect to="/dashboard" />
            }

        }
        return <BaseComponent {...props}/>
    });
export default App;