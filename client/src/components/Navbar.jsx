import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="mb-1" style={{ height: "4.50rem", position: "fixed", width: "100%", zIndex: 100 }}>
      <Container>
        <h2>
          <Link to="/">
            <img src="/src/assets/logo-no-background.png" alt="Logo" style={{height: "66px" }} className="link-light" />
          </Link>
        </h2>
        <span className="text-warning">Logged in as Subarna</span>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <Link to="/login" className="link-light text-decoration-none">
              Login
            </Link>
            <Link to="/register" className="link-light text-decoration-none">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
