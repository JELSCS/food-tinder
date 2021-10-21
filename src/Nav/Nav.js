import React from 'react'
import './Nav.scss';

import { Row, Col} from 'antd';
export default function Nav() {
  return (
    <div className={"nav"}>
    <Row>
    <Col span={8}>
    <h2 className={"food"}> Hunger</h2>
    </Col>
    <Col span={2} offset={4} >
    
   
    </Col>
    <Col span={2} offset={2}>
    <button className={"write"}>Sign in</button>
    </Col>
  </Row>
    </div>
  )
}
