import { Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron,InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';

const Adjust = () => {
  return (
    <div>
    <Headbar></Headbar>
    <br></br>
    <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            <Card>
            <Card.Header as="h5">แก้ไขข้อมูล</Card.Header>
            <Card.Body>

            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">รายการ</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
            </InputGroup>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>เส้นทางผ่าน 1</Form.Label>
                <Form.Control as="select">
                    <option>อาคารระพีสาคริก สำนักบริหารการศึกษา</option>
                    <option>อาคาร 15 คณะวิศวกรรมศาสตร์</option>
                    <option>สำนักการกีฬา</option>
                    <option>อาคารสารนิเทศ 50 ปี สำนักงานอธิการ มก.</option>
                    <option>อาคารเรียนและปฏิบัติการทางด้านวิทยาศาสตร์กายภาพ คณะวิทยาศาสตร์</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>เส้นทางผ่าน 2</Form.Label>
                <Form.Control as="select">
                    <option>อาคารระพีสาคริก สำนักบริหารการศึกษา</option>
                    <option>อาคาร 15 คณะวิศวกรรมศาสตร์</option>
                    <option>สำนักการกีฬา</option>
                    <option>อาคารสารนิเทศ 50 ปี สำนักงานอธิการ มก.</option>
                    <option>อาคารเรียนและปฏิบัติการทางด้านวิทยาศาสตร์กายภาพ คณะวิทยาศาสตร์</option>
                </Form.Control>
            </Form.Group>

            <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    {"ชนิดของสาย "}
                    <Form.Check inline label="SM" type={type} id={`inline-${type}-1`} />
                    <Form.Check inline label="MM" type={type} id={`inline-${type}-2`} />
                  </div>
                ))}
            </Form>
            
            <Row>
            <Col>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">จำนวน core</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
            </InputGroup>
            </Col>
            <Col>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">ใช้จริง</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
            </InputGroup>
            </Col>
            <Col>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">สำรอง</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
            </InputGroup>
            </Col>
            </Row>

            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">หมายเหตุ</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
            </InputGroup>
            
            <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>ข้อมูลเพิ่มเติม</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>

            <br></br>
            <Button variant="danger" type="submit" href="/main">
                แก้ไขข้อมูล
            </Button>
            
            </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          </Row>


    </Container>
    </div>
  );
}

export default Adjust;
