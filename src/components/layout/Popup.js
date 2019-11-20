import React from 'react';
import {Modal,Button} from 'react-bootstrap';

class Popup extends React.Component{
    render(){
        return(
                <Modal show={this.props.show} onHide={this.props.closeMSG} >
                    <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Error username/password</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.props.closeMSG}>
                        Close
              </Button>
                </Modal.Footer>
            </Modal>
        );

    }
}

export default Popup;