import React from 'react';
import Header from './modules/shared/components/header';
import Footer from './modules/shared/components/footer';

const App = (props) => {
    return (
        <div>
            <Header />
            { props.children }
            <Footer />
        </div>
    );
}
export default App;