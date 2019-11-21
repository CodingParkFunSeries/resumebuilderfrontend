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

class ExperienceDetails extends React.Component {

    render() {
        return (
            <Form>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                        <label>Employer</label>
                        <Input
                            defaultValue="IBM"
                            placeholder="Company"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                        <FormGroup>
                        <label>Job Title</label>
                        <Input
                            defaultValue="Engineer"
                            placeholder="Job Title"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                        <label>Address</label>
                        <Input
                            defaultValue="Hyderabad, India"
                            placeholder="Home Address"
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
                            <label>Start Date</label>
                            <Input
                                placeholder="Start Date"
                                type="date"
                            />
                        </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                        <FormGroup>
                            <label>End Date</label>
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

export default ExperienceDetails;