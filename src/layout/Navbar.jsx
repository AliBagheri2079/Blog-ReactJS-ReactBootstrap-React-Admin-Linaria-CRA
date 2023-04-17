import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavbarLayout = () => {
  return (
    <Navbar className="py-4" expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <i className="bi bi-house fs-2 mx-2" />
          <strong className="fs-2 text-uppercase">Home</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="end"
          scroll="true"
          backdrop="true"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end align-items-lg-center flex-grow-1 pe-3 fs-6">
              <Nav.Link href="#chef-advices" className="mx-2">
                Chef Advices
              </Nav.Link>
              <Nav.Link href="#contact-us" className="mx-2">
                Contact US
              </Nav.Link>

              <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown-expand">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form.Floating className="d-none d-lg-flex">
              <Form.Control
                id="floatingSearchInput"
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
              />
              <label className="ms-2" htmlFor="floatingSearchInput">
                Search
              </label>
            </Form.Floating>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarLayout;
