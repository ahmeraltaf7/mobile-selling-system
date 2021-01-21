import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const ProductList = ({ name, _id, image, numReviews, rating, price }) => {
  return (
    <Card className="py-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value= {rating} text={`${numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">
         ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
