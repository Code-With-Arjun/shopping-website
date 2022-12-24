import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Card } from "react-bootstrap";
// import Service from '../api/Service'
import { BsFillBackspaceFill } from "react-icons/bs";
import { removeToCart } from "../action";
const Checkout = ({ item }) => {
  const index = useSelector((state) => state.handleCartItems);
  // const [items,setItems]=useState([])
  const dispatch = useDispatch();
  const value = useSelector((state) => state.handleApiData);
  const [filterItems, setFilterItems] = useState([]);
  const [count, setCount] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  // console.log(item)
  useEffect(() => {
    //  console.log(price)
    console.log(filterItems);
    const obj = {};
    for (let x of index) {
      obj[x] = (obj[x] || 0) + 1;
    }
    setCount(obj);
    const filterItem = value.filter((val) => {
      for (let x of index.sort((a, b) => a - b)) {
        if (val.id == x) {
          return val;
        }
        // return val.id==x
      }
    });
    setFilterItems(filterItem);
    // console.log(filterItem)
  }, [isUpdate]);
  function handleClick(data) {
    dispatch(removeToCart(data));
    setIsUpdate(!isUpdate);
  }

  const renderItems = filterItems.map((data, index) => {
    return (
      <Col md={3} sm={4} key={index}>
        <Card style={{ width: "18rem", height: "19rem", margin: "0.6rem 0" }}>
          <div
            className="close_icon"
            style={{ textAlign: "right" }}
            onClick={() => handleClick(data)}
          >
            <BsFillBackspaceFill />
          </div>
          <Card.Img
            variant="top"
            src={data.image}
            style={{ width: "100px", height: "100px", margin: "auto" }}
          />
          <hr />
          <Card.Body style={{ padding: "0px", textAlign: "center" }}>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text style={{ marginTop: "0.4rem" }}>
              {count[data.id] > 1
                ? `Total Price*${count[data.id]}=${data.price * count[data.id]}`
                : data.price}
            </Card.Text>
            <div>
              <button>Checkout</button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  // console.log(value)

  return (
    <Container fluid>
      <Row>{renderItems}</Row>
    </Container>
    // <div>hello</div>
  );
};

export default Checkout;
