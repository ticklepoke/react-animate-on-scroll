import React from 'react'
import { Col, Card } from 'react-bootstrap'

export default function CardItem(props) {
    return (

        <Col lg={4}>
            <Card
                data-aos={props.item}
                data-aos-duration="1000"
                data-aos-offset="500"
                className="m-2">
                <Card.Body>
                    <Card.Title>{props.item}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>

    )
}
