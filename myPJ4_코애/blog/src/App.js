/* eslint-disable */
import "./App.css";
import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
    let [a] = useState(data);
    let navigate = useNavigate();
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navigate('/')}}>하나</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/detail')}}>둘</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="bg-img"></div>
            <div className="container text-center">
               
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="row row-cols-3">
                                {a.map((data, i) => {
                                    return (
                                        <div className="col">
                                            <img
                                                width="50%"
                                                src="https://blisgo.com/wp-content/uploads/elementor/thumbs/%EB%85%B8%ED%8A%B8%EB%B6%81-p0rlb5fzdufcmaoxz90rc2u2wqxpthxyy1t0qrefb4.jpg"
                                            ></img>
                                            <h3>{data.title}</h3>
                                            <p>{data.price}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    }
                />

                <Route path="/detail" element={<div>상세페이지입니다</div>} />
                <Route path="*" element={<div>없는 페이지 입니다.</div>}></Route>
            </Routes>
            </div>
        </>
    );
}

export default App;
