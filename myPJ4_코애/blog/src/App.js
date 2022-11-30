/* eslint-disable */
import "./App.css";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { createContext, useState } from "react";
import data from "./data";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail";
import { useNavigate } from "react-router-dom";
import Cart from "./components/Cart";
import Test from "./components/Test";
import axios from "axios";

// 보관함
let context1 = createContext();

function App() {
    let [shoes, setShoes] = useState(data);
    let [재고] = useState();
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
                            detail
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/cart");
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
                <Route path="/cart" element={<Cart />}></Route>
                <Route
                    path="*"
                    element={<div>없는 페이지입니다 404</div>}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
