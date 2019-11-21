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

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

class SkillDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
        };
      }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

    render() {
        return (
            <Form>
                <Row>
                    <Col className="pr-1" md="12">
                        <FormGroup>
                        <label>Skill Name</label>
                        <Input
                            defaultValue="Java"
                            placeholder="skill details"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-1" md="12">
                        <FormGroup>
                        <label>Skill Name</label>
                        <Input
                            defaultValue="C#"
                            placeholder="skill details"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                </Row>
                
            </Form>
        )
    }

}

export default SkillDetails;