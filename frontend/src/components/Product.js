import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-2 p-4 rounded">
      <Link to={`/product/${product._id}`}> </Link>
      <Card.Img src={product.image} variant="top" />


      <Card.Body>
          <Link to={`/product/${product._id}`}>
              <Card.Title as='div'  className="text-center"><strong>{product.name}</strong>
              </Card.Title>
          </Link>

            <Card.Text as='div'  className="text-center">
          <Rating value={product.rating} text={`${product.numReviews} Reviews `}/>
            </Card.Text>

            <Card.Text as='h4' className="text-center">
            MRP ₹ {product.price}
            </Card.Text>

      </Card.Body>
    </Card>


    
  );

};

export default Product;
