import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
    const [query, setQuery] = useSearchParams();
    const [productList, setProductList] = useState([]);
    
    const getProduct = async () => {
        let searchQuery = query.get("q") || "";

        let url = `http://localhost:4000/products/?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };

    useEffect(() => {
        getProduct();
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
