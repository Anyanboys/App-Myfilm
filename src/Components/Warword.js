import { Card, Container, Row, Col, Image } from "react-bootstrap";
import war1 from "../assets/images/warword/war1.jpg"
import war2 from "../assets/images/warword/war2.jpg"
import war3 from "../assets/images/warword/war3.jpg"
import war4 from "../assets/images/warword/war4.jpg"
import war5 from "../assets/images/warword/war5.jpg"
import war6 from "../assets/images/warword/war6.jpg"

const Warword = () => {
    return (
        <div>
            <Container>
                <h1 className="text-white">WAR WORD MOVIES</h1>
                <Row>
                    <Col id="warword" md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image className="images" src={war1} alt="War1 images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE TOMORROW WAR</Card.Title>
                                    <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                <Card.Text cllassName="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image className="images" src={war2} alt="War2 Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">GREAT WAR</Card.Title>
                                    <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                <Card.Text cllassName="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image className="images" src={war3} alt="War3 Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">WAR OF THE WORD</Card.Title>
                                    <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                <Card.Text cllassName="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image className="images" src={war4} alt="War4 Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">MIDWAY</Card.Title>
                                    <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                <Card.Text cllassName="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image className="images" src={war5} alt="War5 Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">1994 BROTHER ENEMIES</Card.Title>
                                    <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                <Card.Text cllassName="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image className="images" src={war6} alt="War6 Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">WUNDERLAND</Card.Title>
                                    <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                <Card.Text cllassName="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Warword