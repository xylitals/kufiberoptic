import { InputGroup,Accordion,CardGroup,Carousel,ListGroup,Table,Badge,Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Headbar from './headbar';
import Bottom from './bottom';
import UploadFiles from './FileUpload';
import { Link } from 'react-router-dom';
import test1 from '../img/test1.jpg';
import test2 from '../img/test2.jpg';

const Datapage = () => {
      
  const history = useHistory();
  const {id} = useParams();
  const [product,setProduct] = useState([])
  const [repair,setRepair] = useState([])

  useEffect(() => {
      fetch('/products/'+id)
      .then(res => res.json())
      .then(product => setProduct(product))
      console.log(product)
  },[])

  useEffect(() => {
    fetch('/repair')
    .then(res => res.json())
    .then(repair => setRepair(repair))
    console.log(product)
  },[])

                               
  const [rdetale,setrdetale] = useState('');
  const [rdate,setrdate] = useState('');
  const [rid,setrid] = useState(id);

  

  const handleSubmit = () => {
    if(window.confirm('are  you sure?')){
    const blog = {rdetale,rdate,rid}
    fetch('/repair', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }
  }

  const Del = (dataid) =>
  {
    if(window.confirm('จะลบช้ะะะะ?'))
    {
      fetch('/products/'+dataid, 
      { method: 'DELETE' ,
        header: {'Accept':'application/json','Content-Type':'application/json'}
      })
    }
  }

  const Delr = (dataid) =>
  {
    if(window.confirm('จะลบช้ะะะะ?'))
    {
      fetch('/repair/'+dataid, 
      { method: 'DELETE' ,
        header: {'Accept':'application/json','Content-Type':'application/json'}
      })
    }
  }

  const ed = (eventId) => {
    history.push({
      pathname: '/editproduct/' + eventId
    })
  }

  return (
        <div className="App-main">
        <Headbar></Headbar>
        <br></br>     
        
        <Container>
        <Row>
        <Col></Col>
        <Col xs="12">
            <Card border="success" >
            <Card.Header as="h5">
              <Badge variant="success">{product ? product.status :null}</Badge>{' '}{product ? product.name : null}{' '}
              <p className="right">
              {' '}
              <Link onClick = {()=>ed(id)} target="_blank">
                <Button type="submit" variant="warning"  size="sm" ><Icon.PencilSquare/></Button>
              </Link>{' '}
              <Button variant="danger" type="submit" size="sm" onClick={()=>Del(id)} href="/list"><Icon.Trash/></Button>
              </p>
            </Card.Header>
            <Card.Body>
                <p>       <Badge variant="warning">{'ต้นทาง '}</Badge>{'  :  '}{product ? product.station1 :null}{' '}
                          <Badge variant="warning">{'ปลายทาง '}</Badge>{'  :  '}{product ? product.station2 :null}{' '}
                          <Badge variant="success">{'สถานะ'}</Badge>{'  :  '}{product ? product.status :null}
                </p><p>   <Badge variant="dark">{'ชนิดของสาย '}</Badge>{'  :  '}{product ? product.fibertype :null}{' '}
                          <Badge variant="dark">{'ระยะทางโดยประมาณ '}</Badge>{'  :  '}{product ? product.notuse_core :null}{' เมตร '}{' '}
                          <Badge variant="dark">{'จำนวน core '}</Badge>{'  :  '}{product ? product.core :null}{' core '}{' '}
                          <Badge variant="dark">{'ใช้งานไปแล้ว '}</Badge>{'  :  '}{product ? product.use_core :null}{' core '}{' '}
                          <Badge variant="dark">{'คงเหลือที่ว่าง '}</Badge>{'  :  '}{product ? product.notuse_core :null}{' core '}{' '}
                </p><p>   <Badge variant="dark">{'วันที่'}</Badge>{'  :  '}{product ? product.date :null}{' '}
                          <Badge variant="dark">{'ผู้ดำเนินการ '}</Badge>{'  :  '}{product ? product.person :null}{' '}
                </p>
            </Card.Body>
            </Card>
            <br/>
     
                        <Card border="success" >
                        <Card.Header as="h5">
                          ข้อมูลการซ่อมแซมและการบำรุงรักษา
                        </Card.Header>
                        <Card.Body>


                        <form>
                        <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend size="sm">
                        <InputGroup.Text size="sm">id</InputGroup.Text>
                        </InputGroup.Prepend >
                        <FormControl 
                          type="string" 
                          required 
                          value={rid}
                          size="sm"
                          oncontextmenu={(e) => setrid(e.target.value)}
                        />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend size="sm">
                        <InputGroup.Text size="sm">รายการ</InputGroup.Text>
                        </InputGroup.Prepend >
                        <FormControl 
                          type="string" 
                          required 
                          value={rdetale}
                          size="sm"
                          onChange={(e) => setrdetale(e.target.value)}

                        />
                        <InputGroup.Prepend size="sm">
                        <InputGroup.Text size="sm">วันที่ดำเนินการ</InputGroup.Text>
                        </InputGroup.Prepend >
                        <FormControl 
                          size="sm"
                          type="string" 
                          required 
                          value={rdate}
                          onChange={(e) => setrdate(e.target.value)}
                        />
                        <Button size="sm" type="submit" variant="success" onClick={handleSubmit}>เพิ่ม</Button>
                        </InputGroup>
                        </form>
                        <Table striped bordered hover size="sm">
                          <thead>
                            <tr>
                              <th className="center">date</th>
                              <th className="center">รายการซ่อม</th>
                              <th className="center"></th>
                              
                            </tr>
                          </thead>
                          <tbody>
                          
                            {repair.filter((val)=>{
                              if (val.rid == id){
                                return val
                            }
                            }).map((el)=>(
                                <tr key={el.id}>
                                {' '}
                                <th className="center">{el.rdate}</th>
                                <th>{' '}{el.rdetale}</th>
                                <th>
                                  <div>
                                  <Button variant="danger" type="submit" size="sm" onClick={()=>Delr(el._id)} href={"/product/"+el.rid}><Icon.Trash/></Button>
                                  </div>
                                </th>
                                </tr>

                            ))}
                          
                          </tbody>
                        </Table>

                        </Card.Body>
                        </Card>

                        <br/>

                        <Card border="success" >
                        <Card.Header as="h5">
                          หมายเหตุ
                        </Card.Header>
                        <Card.Body>
                        {product ? product.anyelse :null}
                              {/*<form>
                              <InputGroup>
                              <InputGroup.Prepend>
                              <InputGroup.Text>วันที่ดำเนินงาน</InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl 
                                type="string" 
                                required 
                                value={imgid}
                                onChange={(e) => setimgid(e.target.value)}
                              />
                              <Form.Group controlId="formFileSm" className="mb-3">
                              <Form.Label>Small file input example</Form.Label>
                              <Form.Control 
                                type="file" 
                                size="sm" 
                                name="images" 
                                id="formFile" 
                                multiple
                              />
                              
                              </Form.Group>
                              </InputGroup>
                              <Button type="submit" onClick={handleSubmit}>เพิ่มรายการ</Button>
                              </form>
                              <div>
                              <form>
                              <input
                                type="string" 
                                required 
                                value={imgid}
                                onChange={(e) => setimgid(e.target.value)}
                              />
                              <input type="file" class="form-control" name="images" id="formFile" multiple/>
                              <Button type="submit" class="btn btn-warning" value="Upload Images" onClick={handleSubmit} />
                              
                             
                              </form>
                              </div>*/}
                            
                        </Card.Body>
                        </Card>
            

            
            
            <br/>
            {/*<CardGroup>
            <Card>
              <Card.Img variant="top" src={test1} alt="Girl in a jacket" width="200" height="200" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={test1} alt="Girl in a jacket" width="200" height="200"  />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={test1} alt="Girl in a jacket" width="200" height="200"  />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={test1} alt="Girl in a jacket" width="200" height="200"  />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={test1} alt="Girl in a jacket" width="200" height="200"  />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </CardGroup>
            */}

            
          

        </Col>
        <Col></Col>
         </Row>
        </Container>
        <Bottom></Bottom>
        </div>
  );
}

export default Datapage;


