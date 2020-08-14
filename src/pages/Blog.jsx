import React from 'react';
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

class Blog extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-2">
                            <img
                                width={150}
                                height={150}
                                className="mr-3 rounded"
                                src="https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg"
                                alt="media"
                            />
                            <Media.Body>
                                <h5>Media title</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus
                                    adipisci alias amet atque blanditiis commodi cumque cupiditate dicta, distinctio
                                    error hic impedit ipsa, ipsum magni omnis perspiciatis vitae voluptatem!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-2">
                            <img
                                width={150}
                                height={150}
                                className="mr-3 rounded"
                                src="https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg"
                                alt="media"
                            />
                            <Media.Body>
                                <h5>Media title</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus
                                    adipisci alias amet atque blanditiis commodi cumque cupiditate dicta, distinctio
                                    error hic impedit ipsa, ipsum magni omnis perspiciatis vitae voluptatem!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-2">
                            <img
                                width={150}
                                height={150}
                                className="mr-3 rounded"
                                src="https://images.pexels.com/photos/4170628/pexels-photo-4170628.jpeg"
                                alt="media"
                            />
                            <Media.Body>
                                <h5>Media title</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus
                                    adipisci alias amet atque blanditiis commodi cumque cupiditate dicta, distinctio
                                    error hic impedit ipsa, ipsum magni omnis perspiciatis vitae voluptatem!
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="m-2 text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Youtube</ListGroup.Item>
                                <ListGroup.Item>Instagram</ListGroup.Item>
                                <ListGroup.Item>Twitter</ListGroup.Item>
                                <ListGroup.Item>Viber</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Animi aspernatur debitis inventore mollitia vero.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;