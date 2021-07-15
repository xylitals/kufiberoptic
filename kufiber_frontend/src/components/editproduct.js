import { Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron,InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Bottom from './bottom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Edit = () => {
  
  const {id} = useParams();
  useEffect(() => {
    getStation();
    getProduct();
  }, [])

  const [station,setStation] = useState([])
  const [product,setProduct] = useState([])
  const [name,setname] = useState(product.name);
  const [status,setstatus] = useState(product.status);
  const [station1,setstation1] = useState(product.station1);
  const [station2,setstation2] = useState(product.station2);
  const [fibertype,setfibertype] = useState(product.fibertype);
  const [distance,setdistance] = useState(product.distance);
  const [core,setcore] = useState(product.core);
  const [use_core,setuse_core] = useState(product.use_core);
  const [notuse_core,setnotuse_core] = useState(product.notuse_core);
  const [date,setdate] = useState(product.date);
  const [person,setperson] = useState(product.person);
  const [anyelse,setanyelse] = useState(product.anyelse);

  const getStation = () => {
    fetch('/station')
      .then(res => res.json())
      .then(station => setStation(station))
      console.log(station)
  }

  const getProduct = () => {
    fetch('/products/'+id)
      .then(res => res.json())
      .then(product => setProduct(product))
      console.log(product)
  }
  
  const handleSubmit = () => {
    if(window.confirm('are  you sure?')){
    const blog = { name,status,station1,station2,fibertype,distance,
        core,use_core,notuse_core,date,person,anyelse,
    }
    fetch('/products/'+id, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }
  }

  return (
    <div className="App-main">
    <Headbar></Headbar>
    <br></br>
    <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            <Card>
            <Card.Header as="h5">Edit</Card.Header>
            <Card.Body>
               
            <form>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>รายการ</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="string" 
                  required 
                  defaultValue={product.name}
                  onChange={(e) => setname(e.target.value)}
                />     
                </InputGroup>
                {/*status+type+insertplace*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>สถานะการใช้งาน</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                  type="string" 
                  required 
                  defaultValue={product.status}
                  onChange={(e) => setstatus(e.target.value)}
                  as="select"
                  >
                    <option>{product.status}</option>
                    <option>กำลังใช้งาน</option>
                    <option>อยู่ระหว่างการดำเนินการ</option>
                    <option>ยังไม่ดำเนินการ</option>
                </Form.Control>
                <InputGroup.Prepend>
                <InputGroup.Text>ประเภทของสาย</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                  type="string" 
                  required 
                  defaultValue={product.fibertype}
                  onChange={(e) => setfibertype(e.target.value)}
                  as="select"
                  >
                    <option>{product.fibertype}</option>
                    
                    <option>Single Mode</option>
                    <option>Multi Mode</option>
                    <option>ไม่ระบุ</option>
                </Form.Control>
                <Button variant="success" type="submit" href="/addstation">
                เพิ่มตัวเลือกสถานที่ต้นทางหรือปลายทางเพิ่มเติม
                </Button>
                </InputGroup>

                {/*s1+s2*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>ต้นทาง</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                  type="string" 
                  required 
                  defaultValue={product.station1}
                  onChange={(e) => setstation1(e.target.value)}
                  as="select"
                  >
                    <option>{product.station1}</option>
                    {station.map( el=> (
                    <option key={el.id}>
                      {el.name}
                    </option>
                    ))}
                </Form.Control>
                <InputGroup.Prepend>
                <InputGroup.Text>ปลายทาง</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                  type="string" 
                  required 
                  defaultValue={product.station2}
                  onChange={(e) => setstation2(e.target.value)}
                  as="select"
                  placeholder="Password"
                  >
                    <option>{product.station2}</option>
                    {station.map( el=> (
                    <option key={el.id}>
                      {el.name}
                    </option>
                    ))}
                </Form.Control>
                </InputGroup>
                
                {/*core+distance*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>ระยะทางโดยประมาณ(m)</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="number" 
                  required 
                  defaultValue={product.distance}
                  onChange={(e) => setdistance(e.target.value)}
                />
                <InputGroup.Prepend>
                <InputGroup.Text>จำนวน Core</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="number" 
                  required 
                  defaultValue={product.core}
                  onChange={(e) => setcore(e.target.value)}
                />
                <InputGroup.Prepend>
                <InputGroup.Text>ถูกใช้งาน</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="number" 
                  required 
                  defaultValue={product.use_core}
                  onChange={(e) => setuse_core(e.target.value)}
                />
                <InputGroup.Prepend>
                <InputGroup.Text>ยังไม่ได้ใช้งาน</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="number" 
                  required 
                  defaultValue={product.notuse_core}
                  onChange={(e) => setnotuse_core(e.target.value)}
                />

                </InputGroup>

                {/*date+restname*/}
                <InputGroup className="mb-3" size="sm">
                <InputGroup.Prepend size="sm">
                <InputGroup.Text size="sm">วันที่ดำเนินงาน</InputGroup.Text>
                </InputGroup.Prepend>
                {/*<FormControl 
                  type="string" 
                  required 
                  defaultValue={product.date}
                  onChange={(e) => setdate(e.target.value)}
                />*/}
                <DatePicker defaultValue={product.date} selected={date} onChange={(date) => setdate(date)} />
                <InputGroup.Prepend size="sm">
                <InputGroup.Text size="sm">ผู้ดำเนินงาน</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="string" 
                  required 
                  defaultValue={product.person}
                  onChange={(e) => setperson(e.target.value)}
                  size="sm"
                />
                </InputGroup>

                {/*else*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>ข้อมูลเพิ่มเติม</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  as="textarea" 
                  aria-label="With textarea" 
                  type="string" 
                  required
                  defaultValue={product.anyelse}
                  onChange={(e) => setanyelse(e.target.value)}
                />
                </InputGroup>
                {/*<button onClick={updateUser} >Update User</button> */}
                
                <Button type="submit" onClick={handleSubmit} href="/list">แก้ไขรายการ</Button>
            </form>
            
            <br></br>
          
            </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          </Row>

    </Container>
    <Bottom></Bottom>
    </div>
  );
}

export default Edit;
