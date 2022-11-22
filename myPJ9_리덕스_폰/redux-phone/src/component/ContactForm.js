import React,{useState} from "react";
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
const ContactForm = () => {

    const [userName,setuserName] = useState('');
    const [userNum,setuserNum] = useState(0);
    const dispatch = useDispatch();

    const addContact = (e) => {
        e.preventDefault();
        dispatch({type: 'add_contact' , payload:{userName, userNum}})
    }

    return (
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>이름</Form.Label>
                <Form.Control onChange={(e)=> setuserName(e.target.value)} type="text" placeholder="이름을 입력해주세요" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>번호</Form.Label>
                <Form.Control onChange={(e)=> setuserNum(e.target.value)} type="text" placeholder="번호를 입력해주세요" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                추가
            </Button>
        </Form>
    );
};

export default ContactForm;
