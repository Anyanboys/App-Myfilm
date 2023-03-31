import { Card, Container, Row, Col, Image } from "react-bootstrap";
import avatarImage from "../assets/images/trending/avtr.jpg"
import wakanda from "../assets/images/trending/wakanda.jpg"
import avenger from "../assets/images/trending/avenger.jpg"
import potter from "../assets/images/trending/potter.jpg"
import spider from "../assets/images/trending/spider.jpg"
import thor from "../assets/images/trending/thor.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <h1 className="text-white">SUPER HERO MOVIES</h1>
                <Row>
                    <Col id="trending" md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image className="images" src={avatarImage} alt="Avatar Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AVATAR</Card.Title>
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
                            <Image className="images" src={wakanda} alt="Panter Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BLACK PANTER</Card.Title>
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
                            <Image className="images" src={avenger} alt="Avenger Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AVENGER</Card.Title>
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
                            <Image className="images" src={potter} alt="Potter Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">HARRY POTTER</Card.Title>
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
                            <Image className="images" src={thor} alt="Thor Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THOR</Card.Title>
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
                            <Image className="images" src={spider} alt="spider Image" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">SPIDERMAN</Card.Title>
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

export default Trending