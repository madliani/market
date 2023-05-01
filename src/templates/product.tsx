import { HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import {
    Breadcrumb,
    Card,
    Col,
    ColProps,
    Container,
    Row
} from "react-bootstrap";
import { SEO } from "../components/seo";
import { Product, ProductsResponse } from "../types/products";

type PageContext = {
    product: Product;
};

export const Head: HeadFC<ProductsResponse, PageContext> = ({
    pageContext
}) => <SEO title={`Market :: ${pageContext.product.name}`} />;

const breakpoints: ColProps = {
    lg: 6,
    md: 8,
    sm: 12,
    xl: 6,
    xs: 12
};

const ProductPage: React.FC<PageProps<ProductsResponse, PageContext>> = ({
    pageContext
}) => {
    const { product } = pageContext;
    const { department, description, image, name, price } = product;

    return (
        <Container>
            <Row className="mt-3">
                <Col {...breakpoints}>
                    <Breadcrumb>
                        <Breadcrumb.Item active>
                            <Link to="/">All</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{department}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{name}</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col {...breakpoints}>
                    <Card>
                        <Card.Img
                            alt="Image not found!"
                            src={image}
                            variant="top"
                        />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle>{price}$</Card.Subtitle>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductPage;
