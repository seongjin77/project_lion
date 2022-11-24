/* eslint-disable */
import "./App.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Card from "./components/Card";
import { Routes, Route, Link } from "react-router-dom";
import {Detail} from './components/Detail';
import { useNavigate,Outlet } from "react-router-dom";
import About from "./components/About";
import Test from "./components/Test";


function App() {
    let [shoes] = useState(data);
    let navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            홈
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/detail");
                            }}
                        >
                            cart
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="bg-img"></div>
                            <Container>
                                <Row>
                                    {shoes.map((v, i) => (
                                        <Card v={v} i={i} />
                                    ))}
                                </Row>
                            </Container>
                        </>
                    }
                ></Route>
                <Route path="/detail" element={<Detail/>}>
                    <Route path="test" element={<Test/>}></Route>
                </Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="*" element={<div>없는 페이지입니다 404</div>}></Route>
            </Routes>



        </>
    );
}

export default App;
