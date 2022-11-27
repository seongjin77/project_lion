import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
    // 또 불러올 필요없음.
    // useState(() => {
    //     axios
    //         .get("https://codingapple1.github.io/shop/data2.json")
    //         .then((data) => {
    //             let copy = [...shoes, ...data.data];
    //             setShoes(copy);
    //         });
    //     console.log("확인용~!~!");
    // }, [shoes]);
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
        </div>
    );
};
