import React, { Component } from 'react';
import FileUpload from '../../components/file_upload/FileUpload';
import Button from 'react-bootstrap/Button'

class Dashboard extends Component {
    
    render () {
        return (
            <div className="container mt-4">
                <h4 className="display-4 text-center mb-4">
                <i className="fab fa-react"/>
                    Spend Analysis
                </h4>
                <FileUpload />
            </div>
        );
    }
};

export default Dashboard;