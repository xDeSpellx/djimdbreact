
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navmenu from './Navmenu';

class Layout extends React.Component {
    render() {
        return (
            <div className="main-layout">                
                <Navmenu />
                    {this.props.children}
                <Footer />            
            </div>
        );
    }
}

export default Layout;