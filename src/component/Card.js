import React from "react";
import "../css/Card.css";
const Card = () => {
  return (
    <>
      <div class="card rounded border-0 card_height" style={{ width: "90%" }}>
        <div class="card-body p-4">
          <figure>
            <img
              src={val.image}
              alt=""
              class="img-fluid d-block mx-auto mb-3"
              style={{ width: "40%", height: "120px" }}
            />
          </figure>
          <h5>
            {" "}
            <a href="#" class="text-dark text-decoration-none">
              {val.title.slice(1, 60)}
            </a>
          </h5>
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
      </div>
    </>
  );
};

export default Card;
