import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <Navbar bg = "dark" className = "mb-4" style={{height: "4.75rem"}}>
    <Container>
    <h2>
    <img src="/src/assets/logo-no-background.png"style={{ height: "80px" }} />

    </h2>
    </Container>
    </Navbar>
    )
}
 
export default NavBar;