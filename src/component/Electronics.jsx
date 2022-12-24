
import React,{useEffect, useState} from 'react'
import { Col, Container, Row ,Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart} from '../action'
import { FaStar } from "react-icons/fa";
const  Electronics= ({data}) => {
  const [items,setItems]=useState(data)
  const dispatch=useDispatch()
  const renderItems = items.map((val, index) => {
    return (
      <div className="col-md-4 col-sm-4 my-4" key={index}>
        <div class="card rounded border-0 card_height" style={{ width: "90%" }}>
          <div className="relative hover-text-container">
            <img
              src={val.image}
              alt=""
              class="img-fluid d-block mx-auto mb-3 hover-text"
              style={{ width: "40%", height: "120px" }}
            />
          </div>
          <div class="card-body px-4">
            <h5>
              {" "}
              <a href="#" class="text-dark text-decoration-none">
                {val.title.slice(1, 20)}
              </a>
            </h5>
            <p class="small text-muted font-italic ">
              {val.description.slice(1, 100)}
              <br />
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span>Price:{val.price}</span>
              <ul class="list-inline small">
                <li class="list-inline-item m-0">
                  <FaStar className="text-danger" />
                </li>
                <li class="list-inline-item m-0">
                  {" "}
                  <FaStar className="text-danger" />
                </li>
                <li class="list-inline-item m-0">
                  {" "}
                  <FaStar className="text-danger" />
                </li>
                <li class="list-inline-item m-0">
                  {" "}
                  <FaStar />
                </li>
                <li class="list-inline-item m-0">
                  {" "}
                  <FaStar />
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                className="btn_style"
                onClick={() => dispatch(addToCart(val))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <Container fluid>
    <Row>
        {renderItems}
    </Row>
  </Container>
  )
}

export default Electronics