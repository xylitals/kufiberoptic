import { Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';
import Bottom from './bottom';
import './style.css';
import React, { useState, useEffect } from 'react';

const Main = () => {

  /*const [station, setStation] = useState([])
  useEffect(() => {
    fetch('/station')
      .then(res => res.json())
      .then(station => setStation(station))
      console.log(station)
  },[])*/

  return (
    <div className="App-main">
    <Headbar></Headbar>
    <br></br>
    <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            
            {/*<Card>
            {station.map( el=> (
                  <p key={el.id}>
                  {el._id}{el.name}
                  </p>
            ))}
            </Card>*/}
  
            <Card border="success" >
            <Card.Header as="h5">การเชื่อมต่อครือข่ายคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์สอง</Card.Header>
            <Card.Body>
                <p>- <Button size="sm" variant="link" href="http://conference.ku.ac.th/vcs/ku_map/KUmap_all.pdf">แผนผัง</Button>มหาวิทยาลัยเกษตรศาสตร์ <Button size="sm" variant="link" href="http://conference.ku.ac.th/vcs/ku_map/KU_area.zip">แบ่งตามพื้นที่</Button>
                </p><p>- การเชื่อมต่อสายสัญญาณใยแก้วนำแสง (Fiber Optic) พร้อมแนวการเดินสายสัญญาณใยแก้วนำแสง ภายในวิทยาเขตบางเขนพัฒนาจากสายสัญญาณใยแก้วนำแสงเดิม
                </p><p>- ป้ายชื่อสายสัญญาณใยแก้วนำแสง มก.
                </p><p>- การเชื่อมต่ออุปกรณ์เครือข่ายคอมพิวเตอร์ แบบเก่า(old)และแบบใหม่ (new)
                </p><p>- มาตรฐานระบบสายสัญญาณ UTP Cat6 และTIA ของสายสัญญาณใยแก้วนำแสง
                </p><p>- การกำหนดคุณสมบัติสายสัญญาณใยแก้วนำแสง 3 เส้นทาง
                </p><p>- การกำหนดคุณคุณสมับิตเฉพาะ สายสัญญาณใยแก้วนำแสง 5 เส้นทาง
                </p><p>- ผังการเชื่อมต่อระบบ VoIP ของ มก. และคู่มือการใช้งาน IP Phone
                </p><p>- คู่มือ EXFO ASX-110
                </p><p>- ผลการตรวจสอบสายสัญญาณใยแก้วนำแสงด้วย OTDR ของโดยใช้โปรแกรม OTDR viewer มีดังต่อไปนี้
                </p>
            </Card.Body>
            </Card>
            <br/>
            <Card border="success" >
            
            <Card.Body>
                <p>          มาตรฐานระบบสายสัญญาณ Category 6 หรือ Cat6 เป็นมาตรฐานที่ TIA ก็ได้ประกาศใช้มาตรฐาน Cat6 อย่างเป็นทางการเมื่อวันที่ 20 มิถุนายน 2002 ที่ผ่านมาภายใต้เอกสาร ANSI/TIA/EIA-568-B.2-1 เพื่อใช้กับระบบสายสัญญาณ ชนิดสายคู่ตีเกลียวแบบสมดุลย์ (Balanced Twisted-Pair Cabling Systems) ระดับ Category 6 มาตรฐานฉบับนี้นอกจากจะครอบคุลมหัวข้อกำหนดทางด้านสมรรถนะของระบบเหมือนมาตรฐานรุ่นก่อน ๆ แล้ว ยังได้รวมเอาข้อกำหนดของอุปกรณ์ต่อเชื่อม (Connecting Hardware) ในระดับชิ้นส่วน(Component) และการทดสอบ(Measurement/Test Procedure) ต่าง ๆ เข้าไปด้วย
                          สาระสำคัญของมาตรฐาน ANSI/TIA/EIA-568-B.2-1 คือ
                </p><p>          1. สามารถใช้กับระบบ Cat3, Cat5 และ Cat5e ที่มีอยู่เดิมได้ (Backward Compatibility)
                </p><p>          2. เป็นมาตรฐานเปิดที่ทำให้ผลิตภัณฑ์ที่ผลิตจากผู้ผลิตต่าง ๆ กันสามารถทำงานร่วมกันได้(Open Standard)
                </p><p>          3. RJ-45 Moddular Plug และJack จากหลากหลายผู้ผลิตสามารถเข้ากันหรือทำงานร่วมกันได้(Inter-Operabitility)
                </p><p>          4. ข้อกำหนดสมบูรณ์ทั้งระบบครอบคลุมถึงการทดสอบชิ้นส่วน(Component),Patch Cord, Channels และ Permanent Link
                </p><p>          5. มีความกว้างของช่องสัญญาณ(Bandwidth) เป็น 2 เท่าของระบบ Cat5e และมีค่า Power Sum Attenuation to Cross-Talk Ratio (PSACR) เป็นบวกถึง 200 MHz
                </p><p>          6. ข้อกำหนดของชิ้นส่วนและสายเคเบิ้ลต้องได้รับการทดสอบถึง 250 MHz
                </p><p>          หมายเหตุ วิธีการที่ใช้ทดสอบตามที่ระบุไว้ในมาตรฐาน ANSI/TIA/EIA-568-B.2-1 มีชื่อเรียกทางเทคนิคว่า "De-Embedded Test Method" เป็นวิธีการภาคบังคับตามที่มาตรฐานฉบับนี้ได้กำหนดไว้เพื่อใช้ในการทดสอบชิ้นส่วนอุปกรณ์ต่อเชื่อมในระดับ Cat6 ทุกตัว
                </p>
                
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

//export default Main;

export default Main;
