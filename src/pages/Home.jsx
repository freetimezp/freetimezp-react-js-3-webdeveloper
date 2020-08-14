import React from 'react';

import CarouselBox from "../components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";

class Home extends React.Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <div style={{display: "flex"}}>
                        <CardDeck style={{width: 350}} className="m-2">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg"
                                    className="w-100"
                                    height={220}
                                />
                                <Card.Body>
                                    <Card.Title>Show must go on!</Card.Title>
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                        natus?</Card.Text>
                                    <Button variant="primary">Show more</Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <CardDeck style={{width: 350}} className="m-2">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Show must go on!</Card.Title>
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                        natus?</Card.Text>
                                    <Button variant="primary">Show more</Button>
                                </Card.Body>
                                <Card.Img
                                    variant="bottom"
                                    src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
                                    className="w-100"
                                    height={220}
                                />
                            </Card>
                        </CardDeck>
                        <CardDeck style={{width: 350}} className="m-2">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg"
                                    className="w-100"
                                    height={220}
                                />
                                <Card.Body>
                                    <Card.Title>Show must go on!</Card.Title>
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                        natus?</Card.Text>
                                    <Button variant="primary">Show more</Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;