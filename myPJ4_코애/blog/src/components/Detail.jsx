import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import {Nav} from 'react-bootstrap';

let TestBtn = styled.button`
    background-color: ${(props) => props.bg};
    color: ${(props) => (props.bg === "pink" ? "white" : "black")};
`;
// props로 내려줄 수 있음.

// 확장 문법을 쓸때는 styled만 적어줌
let TestBtn2 = styled(TestBtn)`
    width: 300px;
`;

export const Detail = ({ shoes, setShoes }) => {
    console.log("이건뭐", shoes);

    let { id } = useParams();

    // 라우터로 올 시 저장된 상태로 오지 않는다.
    let 찾는상품 = shoes.find((x) => x.id === parseInt(id));
    console.log("찾는상품", 찾는상품);

    return (
        <div className="container">
            <TestBtn bg="pink">dddd</TestBtn>
            <TestBtn2 bg="green">ssss</TestBtn2>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${
                            parseInt(id) + 1
                        }.jpg`}
                        width="100%"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾는상품 && 찾는상품.title}</h4>
                    <p>{찾는상품 && 찾는상품.content}</p>
                    <p>{찾는상품 && 찾는상품.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Outlet></Outlet>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>내용0</div>
            <div>내용1</div>
            <div>내용2</div>
        </div>
    );
};
