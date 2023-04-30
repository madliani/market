import "bootstrap/dist/css/bootstrap.min.css";
import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import { Card, Col, ColProps, Container, Row } from "react-bootstrap";

type Product = {
  department: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: string;
};

type ProductsResponse = { allProductsJson: { nodes: Product[] } };

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

export const Head: HeadFC = () => <title>Home Page</title>;

const breakpoints: ColProps = {
  xs: 12,
  sm: 10,
  md: 8,
  lg: 6,
  xl: 4,
};

const IndexPage: React.FC<PageProps<ProductsResponse>> = ({ data }) => {
  const products = data.allProductsJson.nodes;

  return (
    <Container>
      <Row className="mb-3">
        {products.map(({ id, image, name, price }) => (
          <Col key={id} className="mt-3" {...breakpoints}>
            <Card>
              <Card.Img variant="top" src={image} alt="Image not found!" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{price}$</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IndexPage;
