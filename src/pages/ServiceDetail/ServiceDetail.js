import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Welcome to Details:{serviceId}</h2>
      <Link to="/checkout">
        <button className="btn btn-primary">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
