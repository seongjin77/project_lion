import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

const Card = ({ v, i }) => {
    console.log(v);
    return (
 
                <Col>
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${
                            i + 1
                        }.jpg`}
                        width="80%"
                    ></img>
                    <h4>{v.title}</h4>
                    <p>{v.content}</p>
                    <p>{v.price}</p>
                </Col>

    );
};

export default Card;
