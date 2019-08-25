import React, { Fragment, useState } from 'react';

import { Button, Col, Form, Row } from 'react-bootstrap';

import axios from 'axios';
import MyPieChart from '../charts/MyPieChart';
import MyLineChart from '../charts/MyLineChart';


const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setuploadedFile] = useState(null);
    const [chartData, setChartData] = useState(null);
    
    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Api call done');
            // {'fileName': '', 'filePath': ''}
            res['data'] = {'fileName': 'abc', 'filePath': 'xyz'}
            setChartData([
                { name: 'Group A', value: 400, fill: '#1184d8' }, { name: 'Group B', value: 300 },
                { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
                { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
            ]);
            const { fileName, filePath } = res.data;
            setuploadedFile({ fileName, filePath });
            console.log({uploadedFile});
        } catch(err) {
            if (err.response.status === 500 ) {
                console.log('Something went wrong in the server!');
            } else {
                console.log(err.response.data.msg);
            }
        }
    }

    return (
        <Fragment>
            <Form onSubmit={onSubmit}>
                <div className="custom-file">
                    <Form.Control type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
                    <Form.Label className="custom-file-label" htmlFor="customFile">{filename}</Form.Label>
                </div>
                <Button className="btn-block mt-4" variant="primary" type="submit">
                    Upload
                </Button>
            </Form>
            { uploadedFile ? <Row className="mt-4">{uploadedFile.fileName}
                    <Col> <MyPieChart chartData={chartData}/> </Col>
                    <Col> <MyLineChart/> </Col>
                </Row>: null}
        </Fragment>
    )
}
export default FileUpload;