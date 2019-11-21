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

class ProjectDetails extends React.Component {

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
                        <label>Project Title</label>
                        <Input
                            defaultValue="Resume builder"
                            placeholder="project title"
                            type="text"
                        />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <FormGroup>
                            <label>Description</label>
                            <Editor
                                editorState={this.state.editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                
            </Form>
        )
    }

}

export default ProjectDetails;