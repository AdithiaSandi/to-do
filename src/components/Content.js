import { useEffect, useState } from "react";
import { Tab, Col, Row, Nav, Container, Toast, Form } from "react-bootstrap";
import { Item } from "./Item.js";

export const Content = () => {
  const todo = JSON.parse(localStorage.getItem("todos") || "[]");
  console.log(todo);
  let desc;

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const handleClick = (e) => {
    let temp = todo;
    temp[e.target.id - 1].doing = !temp[e.target.id - 1].doing;
    localStorage.setItem("todos", JSON.stringify(temp));
    console.log(temp);
    window.location.reload();
  };

  const handleSubmit = () => {
    let temp = todo;
    temp.push({
      doing: false,
      done: false,
      desc: desc,
    });
    localStorage.setItem("todos", JSON.stringify(temp));
  };

  const handleInput = (str) => {
    desc = str;
  };

  const handleFinish = (id) => {
    let temp = todo;
    temp[id].done = !temp[id].done;
    localStorage.setItem("todos", JSON.stringify(temp));
    console.log(temp);
    window.location.reload();
  };

  const handleRemove = (id) => {
    let temp = todo;
    temp = temp.filter((item, index) => index != id);
    localStorage.setItem("todos", JSON.stringify(temp));
    console.log(temp);
    window.location.reload();
  };

  return (
    <section className="content-bx">
      <Container>
        <Row>
          <Col className="input-bx">
            <Form onSubmit={() => handleSubmit()}>
              <Form.Control
                type="text"
                id="inputTodo"
                aria-describedby="todo"
                placeholder="What To Do ?"
                onChange={(e) => handleInput(e.target.value)}
              />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Button onClick={() => toggleShow()}>Click</Button> */}
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
                  {todo.map((item, index) => {
                    item.id = index;
                    item.handleClick = handleClick;
                    item.handleFinish = handleFinish;
                    item.handleRemove = handleRemove;
                    if (item.doing === false && item.done === false) {
                      return <Item {...item} />;
                    }
                  })}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {todo.map((item, index) => {
                    item.id = index;
                    if (item.doing === true && item.done === false) {
                      return <Item {...item} />;
                    }
                  })}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {todo.map((item, index) => {
                    item.id = index;
                    if (item.done === true) {
                      return <Item {...item} />;
                    }
                  })}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Toast show={show} onClose={toggleShow} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </section>
  );
};
