import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    Form,
    FormGroup,
    Input
  } from "reactstrap";

class EducationDetails extends React.Component {

    render() {
        return (
            <Form>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                        <label>School Name</label>
                        <Input
                            defaultValue="K V Rewari"
                            placeholder="School Name"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                        <FormGroup>
                        <label>Degree</label>
                        <Input
                            defaultValue="Degree"
                            placeholder="B.Tech"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                        <label>City</label>
                        <Input
                            defaultValue="Hyderabad"
                            placeholder="City"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
                        <FormGroup>
                        <label>ZIP</label>
                        <Input
                            defaultValue="500032"
                            placeholder="ZIP Code"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
                        <FormGroup>
                        <label>Country</label>
                        <Input
                            defaultValue="India"
                            placeholder="Country"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                            <label>Field of Study</label>
                            <Input
                                defaultValue="Computer Science"
                                placeholder="Field of study"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>Graduation Date</label>
                            <Input
                                placeholder="Start Date"
                                type="date"
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }

}

export default EducationDetails;