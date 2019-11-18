
import React from 'react';
import Collapsible from 'react-collapsible';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

class ResumeComponent extends React.Component {

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
                                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                                    <p>It can even be another Collapsible component. Check out the next section!</p>
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

export default ResumeComponent;