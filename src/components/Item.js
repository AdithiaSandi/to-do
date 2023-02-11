import { Col, Container, Form, Row } from "react-bootstrap";

export const Item = ({ doing, done, desc, id, handleClick }) => {
  let name;
  if (doing) {
    if (done) {
      name = "done";
    } else {
      name = "doing";
    }
  } else {
    name = "todo";
  }

  return (
    <div className="item-bx">
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Check
                className="text-wrap"
                type="checkbox"
                name={name}
                id={id + 1}
                label={desc}
                disabled={done}
                checked={doing}
                onChange={(e) => handleClick(e)}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
