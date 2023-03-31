import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">MYFILM</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">SUPER HERO MOVIES</Nav.Link>
                <Nav.Link href="#warword">WAR MOVIES</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar