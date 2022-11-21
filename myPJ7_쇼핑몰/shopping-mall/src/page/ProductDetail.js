import React, { useEffect, useState } from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `http://localhost:4000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);

    };

    useEffect(() => {
        getProductDetail();
    }, []);

    const size = product?.size;

    return (
        <Container>
            <Row>
                <Col className="detailProduct-img">
                    <img src={product?.img}></img>
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>₩ {product?.price}원</div>
                    <Dropdown className="detailProduct-drop">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            사이즈선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            { size !== undefined? size.map((v) => {
                                return (
                                    <Dropdown.Item href="#/action-2">
                                        {v}
                                    </Dropdown.Item>
                                );
                            }): null}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
