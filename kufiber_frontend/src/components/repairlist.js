import { InputGroup,ListGroup,Table,Badge,Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';
import React, { useState, useEffect } from 'react';
import { useHistory  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Bottom from './bottom';


const Filldata2 = () => {
  const [product, setProduct] = useState([])
  const history = useHistory();
  const [searchTerm, setsearchTerm] = useState([])
  const [repair, setRepair] = useState([])

  useEffect(() => {
    fetch('/repair')
      .then(res => res.json())
      .then(repair => setRepair(repair))
      console.log(repair)
  },[])

  /*const pustproduct1 =(pid)=>{
    fetch('/products/'+pid)
        .then(res => res.json())
        .then(product => setProduct(product))
    return(
      <div>{product.station1}</div>
    );
  }

  const pustproduct2 =(pid)=>{
      fetch('/products/'+pid)
          .then(res => res.json())
          .then(product => setProduct(product))
    return(
      <div>{product.station2}</div>
    );
  }*/

  const count = repair.filter((v)=>{
    if (searchTerm == ''){
      return v
    }
    else if(v.rdetale.toLowerCase().includes(searchTerm.toLowerCase())){
      return v
    }
  }).length
  

  return (
      <div>
            <Container>
            <Row>
            <Col></Col>
            <Col xs="12">
            
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend size="sm">
                <InputGroup.Text size="sm">รายการซ่อม:</InputGroup.Text>
                </InputGroup.Prepend >
                <FormControl 
                  size="sm"
                  type="string" 
                  placeholder = "Search From Keyword"
                  onChange={(el)=>{
                    setsearchTerm(el.target.value);
                  }}
                />
                </InputGroup>
                  
                <Button variant="warning" size="sm">
                ผลลัพธ์ทั้งหมด <Badge variant="light">{count}</Badge> รายการ
                <span className="sr-only">unread messages</span>
                </Button>
                <br/>
                  <br></br>
                  <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>รายการ</th>
                            <th>วันที่ดำเนินการ</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>

                         {repair.filter((val)=>{
                            if (searchTerm == ''){
                              return val
                            }
                            else if(
                              (val.rdetale.toLowerCase().includes(searchTerm.toLowerCase()))
                            ){
                              return val
                            }

                          }).sort(function(a,b){
                            a.rdetale = a.rdetale.toLowerCase();
                            b.rdetale = b.rdetale.toLowerCase();
                            if(a.rdetale>b.rdetale){
                              return 1;}
                            else if(a.rdetale<b.rdetale){
                              return -1;}
                            else {
                              return 0;}
                          }).map(el=> (
                          <tr key={el.id}>
                            <td> {el.rdetale}</td>
                            <td> {el.rdate} </td>
                            <td> 
                            <div>
                            {' '}
                            <Button size="sm" variant="dark" type="submit" href={"/product/"+el.rid}>
                            <Icon.ArrowDownRightCircle/>{' รายละเอียด'}
                            </Button>
                            
                            </div>
                            </td>
                          </tr>)
                          )}
                          </tbody>
                      </Table>
                    <br></br>
                  
            </Col>
            <Col></Col>
            </Row>
            </Container>
      </div>
    );
}

const RepairList = () => {
  return (
    <div className="App-main">
    <Headbar></Headbar>
    <br></br>
          <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            <Card>
            <Card.Header>
            <h3>{' รายการซ่อมเส้นใยนำแสงภายในมหาวิทยาลัย'}</h3></Card.Header>
            <Card.Body>
              <Filldata2></Filldata2>      
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

export default RepairList;
