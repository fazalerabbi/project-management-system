import React from 'react';
import Header from "./components/shared/components/header";
import Footer from "./components/shared/components/footer";

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