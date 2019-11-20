
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
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';

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
                                    <PersonalDetails />
                                </Collapsible>
                                <Collapsible trigger="Education" >
                                    <EducationDetails />
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