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

class PersonalDetails extends React.Component {

    render() {
        return (
            <Form>
                <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                        <label>First Name</label>
                        <Input
                            defaultValue="Ajay"
                            placeholder="Company"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                        <FormGroup>
                        <label>Last Name</label>
                        <Input
                            defaultValue="Yadav"
                            placeholder="Last Name"
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
                        <label>Email</label>
                        <Input
                            defaultValue="test@gmail.com"
                            placeholder="Email"
                            type="email"
                        />
                        </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                        <FormGroup>
                        <label>Phone</label>
                        <Input
                            defaultValue="9876543210"
                            placeholder="Phone"
                            type="phone"
                        />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }

}

export default PersonalDetails;