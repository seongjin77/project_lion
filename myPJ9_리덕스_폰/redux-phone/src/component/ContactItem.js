import React from 'react'
import {Row,Col} from 'react-bootstrap';
const ContactItem = ({item}) => {
  return (
    <Row className='mt-4'>
        <Col lg={2}>
            <img width={50} src='https://t4.ftcdn.net/jpg/03/73/50/09/360_F_373500999_wAWkzJZRb2XHm9KeHEDcCJBkx4wR67us.jpg'></img>
        </Col>
        <Col lg={10}>
            <div>{item.userName}</div>
            <div>{item.userNum}</div>
        </Col>
    </Row>
  )
}

export default ContactItem