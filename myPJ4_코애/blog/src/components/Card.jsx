import React from "react";
import { Col } from "react-bootstrap";

const Card = ({ v, i }) => {

    return (
 
                <Col sm={4}>
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
