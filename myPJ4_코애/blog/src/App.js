/* eslint-disable */
import "./App.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail";
import { useNavigate } from "react-router-dom";
import About from "./components/About";
import Test from "./components/Test";
import axios from "axios";

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    // console.log(shoes);
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
                                navigate("/detail/:id");
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
                                        <Card key={v.id} v={v} i={i} />
                                    ))}
                                </Row>
                            </Container>
                            <button
                                onClick={() => {
                                    axios
                                        .get(
                                            "https://codingapple1.github.io/shop/data2.json"
                                        )
                                        .then((data) => {
                                            let copy = [...shoes, ...data.data];
                                            setShoes(copy);
                                        });
                                }}
                            >
                                추가
                            </button>
                        </>
                    }
                ></Route>
                <Route path="/detail/:id" element={<Detail setShoes={setShoes} shoes={shoes} />}>
                    <Route path="test" element={<Test />}></Route>
                </Route>
                <Route path="/about" element={<About />}></Route>
                <Route
                    path="*"
                    element={<div>없는 페이지입니다 404</div>}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
