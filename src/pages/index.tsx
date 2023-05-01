import "bootstrap/dist/css/bootstrap.min.css";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import { Card, Col, ColProps, Container, Row } from "react-bootstrap";
import { SEO } from "../components/seo";
import { ProductsResponse } from "../types/products";

export const indexPageQuery = graphql`
    query IndexPageQuery {
        allProductsJson {
            nodes {
                id
                image
                name
                price
            }
        }
    }
`;

export const Head: HeadFC = () => <SEO />;

const breakpoints: ColProps = {
    lg: 6,
    md: 8,
    sm: 10,
    xl: 4,
    xs: 12
};

const IndexPage: React.FC<PageProps<ProductsResponse>> = ({ data }) => {
    const products = data.allProductsJson.nodes;

    return (
        <Container>
            <Row className="mb-3">
                {products.map(({ id, image, name, price }) => (
                    <Col className="mt-3" key={id} {...breakpoints}>
                        <Link to={`/products/${id}`}>
                            <Card>
                                <Card.Img
                                    alt="Image not found!"
                                    src={image}
                                    variant="top"
                                />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Subtitle>{price}$</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default IndexPage;
