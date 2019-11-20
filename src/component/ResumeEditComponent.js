
import React from 'react';
import Collapsible from 'react-collapsible';

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

class ResumeEditComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreateView : false
        };
    }

    componentDidMount() {
        
        if (this.state.isCreateView == false) {
            // fetch resume for id
            // populate resume object
        }

    }


    render() {
        return (

            <>
                <div className="content">
                <Row>
                    <Col md="12">
                    <Card className="card-plain">
                        <CardHeader>
                        <CardTitle tag="h4">Resume Name</CardTitle>
                        <p className="card-category">
                            Resume Heading
                        </p>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <Collapsible trigger="Personal Details" >
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
                                </Collapsible>
                                <Collapsible trigger="Education" >
                                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                                    <p>It can even be another Collapsible component. Check out the next section!</p>
                                </Collapsible>
                                <Collapsible trigger="Experience" >
                                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                                    <p>It can even be another Collapsible component. Check out the next section!</p>
                                </Collapsible>
                                <Collapsible trigger="Projects" >
                                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                                    <p>It can even be another Collapsible component. Check out the next section!</p>
                                </Collapsible>
                                <Collapsible trigger="Skills" >
                                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                                    <p>It can even be another Collapsible component. Check out the next section!</p>
                                </Collapsible>
                            </div>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
                </div>
            </>

            
        );
    }

}

export default ResumeEditComponent;