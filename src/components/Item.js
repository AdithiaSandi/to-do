import { Button, Col, Container, Form, Row } from "react-bootstrap";
import finish from "../assets/finish-svgrepo-com.svg";
import remove from "../assets/trash-svgrepo-com.svg";

export const Item = ({
  doing,
  done,
  desc,
  id,
  handleClick,
  handleFinish,
  handleRemove,
}) => {
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
              {doing ? (
                done ? (
                  <Button
                    variant="light"
                    className="finish-btn"
                    onClick={() => handleFinish(id)}
                    disabled
                  >
                    <img src={finish} alt="finish"></img>
                  </Button>
                ) : (
                  <Button
                    variant="light"
                    className="finish-btn"
                    onClick={() => handleFinish(id)}
                  >
                    <img src={finish} alt="finish"></img>
                  </Button>
                )
              ) : (
                <Button
                  variant="light"
                  className="remove-btn"
                  onClick={() => handleRemove(id)}
                >
                  <img src={remove} alt="remove"></img>
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
