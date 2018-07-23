import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
const HomeCard = props => (


    <Card>
        <CardBody>
            <img alt="house" src={props.image} height="200" width="100%" />
            <h3>{props.title}</h3>
            <p>Nightly price: {props.price}</p>

        </CardBody>
    </Card>

)

export default HomeCard;