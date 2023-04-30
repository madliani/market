import { Link, PageProps } from "gatsby";
import React from "react";
import {
  Breadcrumb,
  Card,
  Col,
  ColProps,
  Container,
  Row,
} from "react-bootstrap";
import { Product, ProductsResponse } from "../types/products";

type PageContext = {
  product: Product;
};

const breakpoints: ColProps = {
  xs: 12,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 6,
};

const ProductPage: React.FC<PageProps<ProductsResponse, PageContext>> = ({
  pageContext,
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
            <Card.Img variant="top" src={image} alt="Image not found!" />
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
