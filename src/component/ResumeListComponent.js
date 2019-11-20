import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Input
} from "reactstrap";

class ResumeListComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resumes:  []
    }
  }

  componentDidMount = () => {

    /*fetch('http://ajyarms.azurewebsites.net/schools/' + this.state.schoolId + '/batches')
     .then(result=>result.json())
     .then(item=> {
       this.setState({batches: item});
     });*/

     var testResumes = [];

     testResumes.push({
         name: 'myfirstresume',
         date: '30th nov 2019'
     });

     testResumes.push({
        name: 'mysecondresume',
        date: '10th nov 2019'
    });

     this.setState({
         resumes: testResumes
     })

  }

  render() {

    const resumes = this.state.resumes;


    const tableContent =  resumes.map( (item) => {
      return (
        <tr>
          <td>
            <div className="marginleft">
                <Input type="checkbox" />{' '}
            </div>
          </td>
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td>
             <Button color="success">View</Button>{' '}
          </td>
        </tr>
       )
    });

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Personalized Resumes</CardTitle>
                  <p className="card-category float-right" >
                    <Button color="primary">Create</Button>{' '}
                    <Button color="danger">Delete</Button>{' '}
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Created On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableContent}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default ResumeListComponent;