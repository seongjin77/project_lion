import React from 'react'
import { Container, Button,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Login = ({setAuthenticate}) => {

  const navigate = useNavigate();
  const loginUser = (e) => {

      e.preventDefault();
      setAuthenticate(true)
      navigate('/')
  }

  return (
    <Container fluid="sm">
       <Form onSubmit={(e)=> loginUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login