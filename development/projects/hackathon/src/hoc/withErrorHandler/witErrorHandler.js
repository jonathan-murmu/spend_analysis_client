import React, { Component } from 'react';
import Aux from '../Aux/Aux';

import { Button } from 'react-bootstrap';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
        open: false,
        error: null,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    componentWillMount() {
      axios.interceptors.request.use(req=>{
        this.setState({ error: null, modal: false });
        return req;
      });
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error, modal: true });
      });
    }
    render () {
      return (
        <Aux>
            <Modal show={this.state.open} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Oops!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.state.error? this.state.error.message: null}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <WrappedComponent {...this.props} /> 
        </Aux>
      );
    }
  }
};

export default withErrorHandler;
