import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

function Menuitem(props) {
  return (
    <div>
      <Card style={{ margin: "20px" }}>
        <CardBody onClick={props.DishSelect} style={{ cursor: "pointer" }}>
          <CardImg width="100%" alt={props.dish.name} src={props.dish.image} />
          <CardImgOverlay>
            <CardTitle>{props.dish.name}</CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
}

export default Menuitem;
