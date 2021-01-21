import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import ProductList from "./ProductList";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { ListProducts } from "../../Redux/Actions/ProductActions";

const Home = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(ListProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="mt-3">Latest products</h1>
      {loading ? (
        <Loader /> 
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((items) => (
            <Col key={items._id} sm={12} md={6} lg={4} xl={3}>
              <ProductList {...items} />
            </Col>
          ))}
        </Row>
      ) }
    </>
  );
};

export default Home;
