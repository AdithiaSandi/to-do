import { useEffect, useState } from "react";
import { Tab, Col, Row, Nav, Container } from "react-bootstrap";
import { Item } from "./Item.js";

export const Content = () => {
  const todo = JSON.parse(localStorage.getItem("todos") || "[]");
  console.log(todo);

  const handleClick = (e) => {
    console.log(e);
    let temp = todo;
    temp[e.target.id - 1].doing = !temp[e.target.id - 1].doing;
    localStorage.setItem("todos", JSON.stringify(temp));
    console.log(temp);
    window.location.reload();
  };

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
                  {todo.map((item, index) => {
                    item.id = index;
                    item.handleClick = handleClick;
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
    </section>
  );
};
