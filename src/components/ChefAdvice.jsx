import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

import ChefPhoto from "../assets/image/chef.png";

const ChefAdvice = () => {
  return (
    <Container
      id="chef-advices"
      fluid="md"
      style={{ scrollMarginBlock: "9.5rem" }}
    >
      <Row className="mt-5 mb-2">
        <Col xs lg="6">
          <Figure>
            <Figure.Image
              src={ChefPhoto}
              className="object-fit-cover"
              alt="chef cooking a something with ................"
            />
            {/* <Figure.Caption></Figure.Caption> */}
          </Figure>
        </Col>

        <Col xs lg="6" className="mt-5">
          <Container className="ms-lg-3">
            <div>
              <h5 className="text-uppercase text-primary">
                <span
                  className="d-inline-block bg-primary bg-opacity-75 mx-3 my-1 rounded-pill"
                  style={{ width: "40px", height: "4px" }}
                />
                WE ARE HOMIETOUCH
                <span
                  className="d-inline-block bg-primary bg-opacity-75 mx-3 my-1 rounded-pill"
                  style={{ width: "40px", height: "4px" }}
                />
              </h5>

              <h1 style={{ fontSize: "3.2rem" }}>
                Running short of time to make your home shine?
              </h1>
            </div>

            <div className="mt-4">
              <p
                className="fs-6 fw-light text-secondary lh-lg"
                style={{ textAlign: "justify" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                hic voluptatibus incidunt, deserunt eveniet pariatur repudiandae
                dignissimos? Libero repellendus et corrupti consectetur, laborum
                veritatis blanditiis animi aspernatur, officiis ipsa impedit
                dolorum nemo natus, perspiciatis ipsam laudantium perferendis
                vitae sapiente numquam a quasi in! Suscipit dolorem ducimus
                similique?
              </p>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ChefAdvice;
