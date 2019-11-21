
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
import ExperienceDetails from './ExperienceDetails';
import ProjectDetails from './ProjectDetails';
import SkillDetails from './SkillDetails';

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
                                    <ExperienceDetails />
                                </Collapsible>
                                <Collapsible trigger="Projects" >
                                    <ProjectDetails />
                                </Collapsible>
                                <Collapsible trigger="Skills" >
                                    <SkillDetails />
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