import { Tab, Col, Row, Nav, Container } from "react-bootstrap";

export const Content = () => {
  return (
    <section className="content-bx">
      <Container>
        <Row>
          <Col>
            <Tab.Container defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">To-Do</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Doing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Done</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <span>
                    Fugiat officia sit Lorem laborum cupidatat nostrud id eu
                    labore dolore Lorem cillum veniam laboris. Pariatur est
                    magna consectetur minim quis. Laborum et dolor fugiat sint
                    adipisicing magna non. Cillum sunt ad ad cupidatat nulla
                    cillum. Nisi tempor mollit nostrud laborum quis quis Lorem
                    veniam tempor non anim minim exercitation laboris.
                  </span>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <span>
                    Cillum sint officia culpa et. Incididunt exercitation aliqua
                    eu aliqua sit nisi quis laborum dolore culpa reprehenderit
                    in nisi. Nulla labore incididunt ullamco sunt dolore anim
                    quis tempor esse. Commodo dolore et nisi sunt consectetur
                    dolore irure cupidatat in duis do minim laborum.
                    Reprehenderit aliquip aliquip sunt nulla minim exercitation
                    laborum ea irure cillum est. Eu esse minim excepteur
                    eiusmod.
                  </span>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <span>
                    Dolore enim labore enim adipisicing in ut est minim ullamco.
                    Ullamco elit et aute mollit reprehenderit ad duis occaecat
                    nostrud nulla qui sint pariatur. Mollit et ad do ad
                    consequat sit nostrud. Veniam excepteur magna occaecat ipsum
                    nisi sunt mollit sit ad deserunt quis eu. Incididunt
                    consectetur minim nostrud reprehenderit elit officia sint
                    tempor esse adipisicing nisi exercitation adipisicing Lorem.
                    Veniam duis consequat sunt Lorem minim occaecat eu tempor
                    ipsum Lorem sint est veniam.
                  </span>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
