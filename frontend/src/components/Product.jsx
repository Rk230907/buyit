import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import styles from "../css/Product.module.css"; // Import CSS module

const Product = ({ product }) => {
  return (
    <Card className={`my-3 p-3 rounded ${styles.productCard}`}>
      <Link to={`/product/${product._id}`}>
        <div className={styles.productImageContainer}>
          <Card.Img
            className={styles.productImage}
            src={product.image}
            variant="top"
          />
        </div>
      </Link>

      <Card.Body className={styles.productDetails}>
        <Link
          to={`/product/${product._id}`}
          className={styles.productTitleLink}
        >
          <Card.Title as="div" className={styles.productTitle}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3" className={styles.productPrice}>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
