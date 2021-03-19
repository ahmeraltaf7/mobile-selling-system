import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import ProductList from "./ProductList";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { listProducts } from "../../Redux/Actions/ProductActions";
import Paginate from "../../components/Paginate/Paginate";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import Meta from "../../components/Meta/Meta";
import { Link } from "react-router-dom";

const Home = ({match}) => {

  const keyword =match.params.keyword

  const pageNumber = match.params.pageNumber || 1
  
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error, page,pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
    <Meta />
    {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light mt-3' >Go back</Link>}
      <h1 className="mt-3">Latest products</h1>
      {loading ? (
        <Loader /> 
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Row>
          {products.map((items) => (
            <Col key={items._id} sm={12} md={6} lg={4} xl={3}>
              <ProductList {...items} />
            </Col>
          ))}
        </Row>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
              </>
      ) }
    </>
  );
};

export default Home;
